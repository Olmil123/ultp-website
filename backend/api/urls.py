from django.urls import path
from .views import QuestionCreateView, health

urlpatterns = [
    path('health/', health),
    path('questions/', QuestionCreateView.as_view(), name='question-create'),
]
