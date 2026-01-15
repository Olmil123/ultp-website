from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer


@api_view(['GET'])
def health(request):
    return Response({'status': 'ok'})

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by("-created_at")
    serializer_class = ItemSerializer