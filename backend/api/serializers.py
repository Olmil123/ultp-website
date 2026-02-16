from rest_framework import serializers
from .models import Item, Question


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "title", "description", "created_at"]


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ["id", "name", "email", "message", "created_at"]
        read_only_fields = ["id", "created_at"]
