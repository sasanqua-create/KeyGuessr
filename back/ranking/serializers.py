from rest_framework import serializers
from .models import ranking
from .models import user_id

class RankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ranking
        fields = '__all__'

class UserlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_id
        fields = '__all__'