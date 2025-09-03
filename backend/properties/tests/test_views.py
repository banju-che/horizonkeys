from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from properties.models import Property

User = get_user_model()

class PropertyViewsTest(APITestCase):
    def setUp(self):
        # Create a user (agent)
        self.user = User.objects.create_user(
            username="agent1", password="password123"
        )

        # Create a sample property
        self.property = Property.objects.create(
            title="Cozy Apartment",
            description="A nice place to stay",
            price=100000,
            location="Nairobi",
            agent=self.user,
        )

        # URLs
        self.list_url = reverse("property-list-create")
        self.detail_url = reverse("property-detail", args=[self.property.id])

        # Auth headers
        self.client.login(username="agent1", password="password123")

    # ---- LIST ----
    def test_list_properties(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], "Cozy Apartment")

    # ---- CREATE ----
    def test_create_property_authenticated(self):
        data = {
            "title": "Modern Villa",
            "description": "Luxurious villa",
            "price": 250000,
            "location": "Mombasa",
            "agent": self.user.id,
        }
        response = self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Property.objects.count(), 2)

    def test_create_property_unauthenticated(self):
        self.client.logout()
        data = {
            "title": "Unauthorized Property",
            "description": "Should not be created",
            "price": 50000,
            "location": "Nakuru",
            "agent": self.user.id,
        }
        response = self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # ---- RETRIEVE ----
    def test_retrieve_property(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Cozy Apartment")

    # ---- UPDATE ----
    def test_update_property(self):
        data = {"title": "Updated Apartment"}
        response = self.client.patch(self.detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.property.refresh_from_db()
        self.assertEqual(self.property.title, "Updated Apartment")

    # ---- DELETE ----
    def test_delete_property(self):
        response = self.client.delete(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Property.objects.count(), 0)
