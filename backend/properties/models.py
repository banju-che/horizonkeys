from django.db import models
from django.conf import settings
from cloudinary.models import CloudinaryField
from django.core.exceptions import ValidationError
from categories.models import Category
from cities.models import City
from agents.models import Agent

class Property(models.Model):

    PROPERTY_TYPE = (
       ('apartment', 'Apartment'),
       ('house', 'House'),
       ('land', 'Land'), 
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="properties")
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE)
    location = models.CharField(max_length=255)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True, blank=True, related_name="properties")
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    status = models.CharField(max_length=20, default='available')
    square_feet = models.IntegerField()
    image = models.URLField(max_length=500, blank=True, null=True)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE, related_name='property')
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def clean(self):
        if self.price < 0:
            raise ValidationError({"price": "Price cannot be negative."})
    
    def __str__(self):
        return self.title
