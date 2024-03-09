from django.db import models


class Word(models.Model):
    word = models.CharField(max_length=20)
    n_views = models.IntegerField()
    genre = models.CharField(max_length=20, default='')
    related_word_list = models.JSONField()
    level = models.IntegerField(default=1)
