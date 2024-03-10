from django.db import models
from django.utils import timezone

class user_id(models.Model):
    name = models.CharField(null=False, max_length=256)

#class game_id(models.Model):
    #game = models.PositiveIntegerField()
    #word = models.CharField(null=False, max_length=256)

#ranking 
class ranking(models.Model):
    user = models.OneToOneField(user_id, on_delete=models.CASCADE)
    score_time = models.DurationField()
    created_at = models.DateTimeField(null=False, default=timezone.now)
    #game_id = models.ForeignKey(game_id, on_delete=models.CASCADE)
    #game_type = models.PositiveIntegerField()