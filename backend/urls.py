from django.urls import path
from .views import Game

urlpatterns = [
    path('game/', Game.as_view(), name='game'),
]