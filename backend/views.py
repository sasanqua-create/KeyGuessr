# from rest_framework import viewsets, status
# from .models import Word
# from .serializers import WordSerializer
# import wikipedia
# import random
# from rest_framework.response import Response
# import django_filters
# from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from .models import Word
from .serializers import WordSerializer

class WordList(generics.ListAPIView):
    serializer_class = WordSerializer

    def get_queryset(self):
        queryset = Word.objects.all()
        genre = self.request.query_params.get('genre', None)
        level = self.request.query_params.get('level', None)
        
        if genre is not None:
            queryset = queryset.filter(genre=genre)
        if level is not None:
            queryset = queryset.filter(level=level)
        
        return queryset
