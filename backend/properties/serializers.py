from rest_framework import serializers
from .models import Property



class PropertySerializer(serializers.ModelSerializer):
    agent_name = serializers.CharField(source='agent.username', read_only=True)

    class Meta:
        model = Property
        fields = [
            'id',
            'title',
            'description',
            'property_type',
            'price',
            'location',
            'square_feet',   
            'status',
            'agent',
            'agent_name',
            'listed_date',    
            'image'
        ]

