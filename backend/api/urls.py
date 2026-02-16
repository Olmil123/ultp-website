from django.urls import include, path
from .views import QuestionCreateView, ItemViewSet, health
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('items', ItemViewSet, basename='item')

urlpatterns = [
    path('health/', health),
    path('', include(router.urls)),
    path('questions/', QuestionCreateView.as_view(), name='question-create'),
]
