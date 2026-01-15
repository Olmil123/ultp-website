from django.urls import path,include
from .views import health,ItemViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('items',ItemViewSet,basename='item')

urlpatterns = [
    path('health/', health),
    path('', include(router.urls)),
]