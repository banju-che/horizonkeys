# cities/models.py
from django.db import models

class City(models.Model):
    name = models.CharField(max_length=100, unique=True)
    img = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def count(self):
        """Return number of properties in this city."""
        return f"{self.properties.count()} Properties"
