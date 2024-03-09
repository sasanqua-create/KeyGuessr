from rest_framework import serializers
from .models import Word

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = '__all__'