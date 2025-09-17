# blogs/tests/test_views.py
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from blogs.models import Blogs

User = get_user_model()

class BlogAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="julius", password="testpass123")

        # create a sample blog
        self.blog = Blogs.objects.create(
            author=self.user,
            title="First Blog",
            content="This is the first blog",
            is_published=True
        )

        self.list_url = reverse("blog-list")     # we'll map this in urls.py
        self.detail_url = reverse("blog-detail", args=[self.blog.id])

    def test_list_blogs(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], "First Blog")

    def test_create_blog(self):
        data = {
            "title": "New Blog",
            "content": "Created via API",
            "is_published": False,
        }
        response = self.client.post(self.list_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blogs.objects.count(), 2)

    def test_retrieve_blog(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "First Blog")

    def test_update_blog(self):
        data = {"title": "Updated Blog", "content": "Updated content", "is_published": True}
        response = self.client.put(self.detail_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.blog.refresh_from_db()
        self.assertEqual(self.blog.title, "Updated Blog")

    def test_delete_blog(self):
        response = self.client.delete(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Blogs.objects.count(), 0)
