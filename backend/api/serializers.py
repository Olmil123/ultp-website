from rest_framework import serializers
from .models import Item, Question

MESSAGE_MAX_LENGTH = Question._meta.get_field("message").max_length or 2000


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "title", "description", "created_at"]


class QuestionSerializer(serializers.ModelSerializer):
    message = serializers.CharField(
        max_length=MESSAGE_MAX_LENGTH,
        trim_whitespace=True,
        error_messages={
            "max_length": f"Message is too long. Maximum is {MESSAGE_MAX_LENGTH} characters.",
        },
    )
    website = serializers.CharField(
        required=False,
        allow_blank=True,
        write_only=True,
        trim_whitespace=False,
    )
    client_timezone = serializers.CharField(
        required=False,
        allow_blank=True,
        write_only=True,
        max_length=64,
    )

    class Meta:
        model = Question
        fields = [
            "id",
            "name",
            "email",
            "message",
            "website",
            "client_timezone",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def validate_website(self, value):
        if value:
            raise serializers.ValidationError("Spam detected.")
        return ""

    def create(self, validated_data):
        validated_data.pop("website", None)
        validated_data.pop("client_timezone", None)
        return super().create(validated_data)
