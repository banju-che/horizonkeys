# cities/serializers.py
from rest_framework import serializers
from .models import City

class CitySerializer(serializers.ModelSerializer):
    count = serializers.CharField( read_only=True)

    class Meta:
        model = City
        fields = ["id", "name", "count", "img"]
