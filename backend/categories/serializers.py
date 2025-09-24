# categories/serializers.py
from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    count = serializers.CharField( read_only=True)

    class Meta:
        model = Category
        fields = ["id", "title", "count", "img"]
