from rest_framework import serializers
from .models import Item, Question


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "title", "description", "created_at"]


class QuestionSerializer(serializers.ModelSerializer):
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
