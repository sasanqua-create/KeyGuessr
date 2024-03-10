from django.db import models


class Charactor(models.Model):
    name = models.CharField(max_length=20)
    level = models.IntegerField(default=0)
    genre = models.IntegerField(default=0)
    word = models.JSONField(default=list)