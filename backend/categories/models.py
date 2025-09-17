from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=20, unique=True)
    img = models.URLField(max_length=500, blank=True, null=True)

    def _str_(self):
        return self.title

    @property
    def count(self):
        return f"{self.properties.count()} properties"
