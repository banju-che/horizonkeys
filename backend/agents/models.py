from django.db import models

class Agent(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.URLField(blank=True, null=True)
    cover = models.URLField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    reviews = models.PositiveIntegerField(default=0)
    location = models.CharField(max_length=200, blank=True, null=True)
    specialties = models.JSONField(default=list, blank=True)  
    verified = models.BooleanField(default=False)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    profile_url = models.SlugField(unique=True)

    def __str__(self):
        return self.name
