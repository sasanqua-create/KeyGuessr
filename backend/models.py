from django.db import models

# Create your models here.
class Game(models.Model):
    title = models.CharField(max_length=20)
    n_views = models.IntegerField()

    def _str_(self):
        return self.title