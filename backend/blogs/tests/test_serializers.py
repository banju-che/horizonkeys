# blogs/tests/test_serializers.py
from django.test import TestCase
from django.contrib.auth import get_user_model
from blogs.models import Blog
from blogs.serializers import BlogSerializer

User = get_user_model()

class BlogSerializerTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="julius", password="testpass123")

    def test_valid_data_creates_blog(self):
        data = {
            "title": "Serializer Blog",
            "content": "Blog created through serializer",
            "is_published": True,
        }
        serializer = BlogSerializer(data=data, context={"request": None})
        self.assertTrue(serializer.is_valid(), serializer.errors)
        blog = serializer.save(author=self.user)
        self.assertEqual(blog.title, "Serializer Blog")
        self.assertTrue(blog.is_published)

    def test_missing_title_fails(self):
        data = {
            "content": "Missing title field",
            "is_published": False,
        }
        serializer = BlogSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("title", serializer.errors)

    def test_read_only_fields_not_writable(self):
        data = {
            "title": "Test Blog",
            "content": "Some content",
            "author": self.user.id,  # should be read-only
        }
        serializer = BlogSerializer(data=data)
        serializer.is_valid()
        self.assertNotIn("author", serializer.validated_data)
