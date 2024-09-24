from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class post_table(models.Model):
    post_id = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=40)
    user_designation = models.CharField(max_length=7)
    post_text = models.TextField()
    post_image = models.ImageField(null=True, blank=True)
