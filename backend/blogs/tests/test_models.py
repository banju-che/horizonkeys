from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from .models import Blog

User = get_user_model()

class BlogModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="julius", password="testpass123"
        )
        self.blog = Blog.objects.create(
            author=self.user,
            title="First Blog",
            content="This is the first blog content",
            is_published=True,
        )

    def test_blog_creation(self):
        self.assertEqual(self.blog.title, "First Blog")
        self.assertTrue(self.blog.is_published)
        self.assertEqual(str(self.blog), "First Blog")

    def test_blog_author(self):
        self.assertEqual(self.blog.author.username, "julius")


class BlogAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username="julius", password="testpass123"
        )
        self.client.force_authenticate(user=self.user)

    def test_create_blog(self):
        payload = {
            "title": "API Blog",
            "content": "Blog created via API",
            "is_published": True,
        }
        response = self.client.post("/api/blogs/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blog.objects.count(), 1)
        self.assertEqual(Blog.objects.first().title, "API Blog")

    def test_list_blogs(self):
        Blog.objects.create(
            author=self.user, title="List Blog", content="Content here"
        )
        response = self.client.get("/api/blogs/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_update_blog(self):
        blog = Blog.objects.create(
            author=self.user, title="Old Title", content="Old content"
        )
        payload = {"title": "New Title"}
        response = self.client.patch(f"/api/blogs/{blog.id}/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        blog.refresh_from_db()
        self.assertEqual(blog.title, "New Title")

    def test_delete_blog(self):
        blog = Blog.objects.create(
            author=self.user, title="To Delete", content="delete me"
        )
        response = self.client.delete(f"/api/blogs/{blog.id}/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Blog.objects.count(), 0)
