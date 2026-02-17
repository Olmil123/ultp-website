import logging

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from rest_framework import viewsets
from .models import Item, Question
from .serializers import ItemSerializer, QuestionSerializer

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

    def perform_create(self, serializer):
        question = serializer.save()
        self._send_notification(question)

    def _send_notification(self, question):
        recipient = settings.QUESTION_NOTIFY_EMAIL
        if not recipient:
            logger.info('QUESTION_NOTIFY_EMAIL is not set; skip question notification email.')
            return

        subject = f'New question from {question.name}'
        body = '\n'.join(
            [
                'New question submitted from website form.',
                '',
                f'Name: {question.name}',
                f'Email: {question.email}',
                f'Created at: {question.created_at.isoformat()}',
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
