from django.db import models
from django.conf import settings
from cloudinary.models import CloudinaryField

class Blogs(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    image = models.URLField(max_length=500, blank=True, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
