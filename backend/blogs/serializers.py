from rest_framework import serializers
from .models import Blogs

class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blogs
        fields= [ 'id', 'author', 'title', 'content', 'created_at', 'updated_at', 'is_published' ]
        read_only_fields = ["id", "author", "created_at", "updated_at"]
        