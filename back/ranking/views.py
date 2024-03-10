from django.shortcuts import render
from rest_framework import viewsets
from .models import ranking , user_id
from ranking.serializers import RankingSerializer, UserlistSerializer

class RankingAPIView(viewsets.ModelViewSet):
    queryset = ranking.objects.all()
    serializer_class = RankingSerializer

class UserlistAPIview(viewsets.ModelViewSet):
    queryset = user_id.objects.all()
    serializer_class = UserlistSerializer

# Create your views here.
