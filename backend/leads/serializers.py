from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    property_title = serializers.CharField(source='property.title', read_only=True)

    class Meta:
        model = Lead
        fields = ['id', 'property', 'property_title', 'name', 'email', 'message', 'contacted', 'created_at']
