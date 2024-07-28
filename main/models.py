from django.db import models

class Facilities(models.Model):
    img = models.ImageField(upload_to="facilities")
    title = models.CharField(max_length=500)
    desc = models.TextField(max_length=1000)
    
    