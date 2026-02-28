import hashlib
import logging
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from django.conf import settings
from django.core.cache import cache
from django.core.mail import EmailMessage
from django.utils import timezone
from rest_framework.decorators import api_view
from rest_framework.exceptions import Throttled, ValidationError
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from rest_framework import viewsets
from .models import Item, Question
from .serializers import ItemSerializer, QuestionSerializer
from .throttles import QuestionBurstThrottle, QuestionDayThrottle, QuestionHourThrottle

logger = logging.getLogger(__name__)


@api_view(['GET'])
def health(request):
    return Response({'status': 'ok'})

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by("-created_at")
    serializer_class = ItemSerializer


class QuestionCreateView(CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    throttle_classes = [QuestionBurstThrottle, QuestionHourThrottle, QuestionDayThrottle]

    def perform_create(self, serializer):
        self._enforce_request_guards(serializer.validated_data)
        client_timezone = serializer.validated_data.get("client_timezone", "")
        question = serializer.save()
        self._send_notification(question, client_timezone)

    def _send_notification(self, question, client_timezone=""):
        recipient = settings.QUESTION_NOTIFY_EMAIL
        if not recipient:
            logger.info('QUESTION_NOTIFY_EMAIL is not set; skip question notification email.')
            return

        created_at = self._format_created_at(question.created_at, client_timezone)

        subject = f'New question from {question.name}'
        body = '\n'.join(
            [
                'New question submitted from website form.',
                '',
                f'Name: {question.name}',
                f'Email: {question.email}',
                f'Created at: {created_at}',
                '',
                'Message:',
                question.message,
            ]
        )

        email = EmailMessage(
            subject=subject,
            body=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[recipient],
            reply_to=[question.email],
        )

        try:
            email.send(fail_silently=False)
        except Exception:
            logger.exception('Failed to send question notification email.')

    def _enforce_request_guards(self, validated_data):
        ip = self._get_client_ip()
        email = str(validated_data.get("email", "")).strip().lower()
        message = str(validated_data.get("message", "")).strip().lower()

        self._enforce_ip_cooldown(ip)
        self._enforce_email_cooldown(email)
        self._enforce_duplicate_message(email, message)

    def _enforce_ip_cooldown(self, ip):
        if not ip:
            return

        key = f"questions:cooldown:ip:{ip}"
        if cache.get(key):
            raise Throttled(
                wait=settings.QUESTION_IP_COOLDOWN_SECONDS,
                detail="Please wait before sending the next question.",
            )
        cache.set(key, True, timeout=settings.QUESTION_IP_COOLDOWN_SECONDS)

    def _enforce_email_cooldown(self, email):
        if not email:
            return

        key = f"questions:cooldown:email:{email}"
        if cache.get(key):
            raise Throttled(
                wait=settings.QUESTION_EMAIL_COOLDOWN_SECONDS,
                detail="Please wait before sending another message from this email.",
            )
        cache.set(key, True, timeout=settings.QUESTION_EMAIL_COOLDOWN_SECONDS)

    def _enforce_duplicate_message(self, email, message):
        if not email or not message:
            return

        normalized_message = " ".join(message.split())
        fingerprint = hashlib.sha256(f"{email}:{normalized_message}".encode("utf-8")).hexdigest()
        key = f"questions:duplicate:{fingerprint}"
        if cache.get(key):
            raise ValidationError({"message": "This message was already sent recently."})
        cache.set(key, True, timeout=settings.QUESTION_DUPLICATE_TTL_SECONDS)

    def _get_client_ip(self):
        forwarded_for = self.request.META.get("HTTP_X_FORWARDED_FOR")
        if forwarded_for:
            return forwarded_for.split(",")[0].strip()
        return self.request.META.get("REMOTE_ADDR", "")

    def _format_created_at(self, created_at, client_timezone=""):
        fallback_tz_name = settings.QUESTION_TIMEZONE
        tz_name = (client_timezone or "").strip() or fallback_tz_name
        try:
            tz = ZoneInfo(tz_name)
        except ZoneInfoNotFoundError:
            tz_name = fallback_tz_name
            try:
                tz = ZoneInfo(tz_name)
            except ZoneInfoNotFoundError:
                tz = timezone.get_current_timezone()
                tz_name = str(tz)

        localized = timezone.localtime(created_at, tz)
        return f"{localized.strftime('%d.%m.%Y %H:%M:%S')} ({tz_name})"
