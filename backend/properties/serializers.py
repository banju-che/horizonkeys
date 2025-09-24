from rest_framework import serializers
from .models import Property



class PropertySerializer(serializers.ModelSerializer):
    agent = serializers.CharField(source="agent.username", read_only=True)
    category = serializers.CharField(source="category.title", read_only=True)
    city = serializers.CharField(source="city.name", read_only=True)

    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "description",
            "property_type",
            "price",
            "location",
            "square_feet",
            "status",
            "image",
            "created_at",
            "bedrooms",
            "bathrooms",
            "agent",      
            "category",   
            "city",       
        ]

