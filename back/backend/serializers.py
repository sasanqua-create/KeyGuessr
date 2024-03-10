from rest_framework import serializers
from .models import Charactor

class CharactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Charactor
        fields = '__all__'