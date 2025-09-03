from django.db import models
from django.conf import settings
from cloudinary.models import CloudinaryField
from django.core.exceptions import ValidationError

class Property(models.Model):

    PROPERTY_TYPE = (
       ('apartment', 'Apartment'),
       ('house', 'House'),
       ('land', 'Land'), 
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE)
    location = models.CharField(max_length=255)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    status = models.CharField(max_length=20, default='available')
    square_feet = models.IntegerField()
    image = CloudinaryField('image')
    listed_date = models.DateTimeField(auto_now_add=True)
    agent = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='property')

    def clean(self):
        if self.price < 0:
            raise ValidationError({"price": "Price cannot be negative."})
    
    def __str__(self):
        return self.title
