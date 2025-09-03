from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from properties.models import Property
from leads.models import Lead

User = get_user_model()

class LeadViewsTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="agent", password="pass123")
        self.property = Property.objects.create(
            title="Modern Villa",
            description="Spacious house",
            price=300000,
            location="Nairobi",
            agent=self.user
        )
        self.lead = Lead.objects.create(
            property=self.property,
            name="Test User",
            email="test@example.com",
            message="Interested in this villa"
        )

        self.list_url = reverse("lead-list-create")
        self.detail_url = reverse("lead-detail", args=[self.lead.id])

    # ---- LIST ----
    def test_list_leads(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], "Test User")

    # ---- CREATE ----
    def test_create_lead(self):
        data = {
            "property": self.property.id,
            "name": "Alice",
            "email": "alice@example.com",
            "message": "Is it still on sale?"
        }
        response = self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Lead.objects.count(), 2)

    # ---- RETRIEVE ----
    def test_retrieve_lead(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Test User")

    # ---- UPDATE ----
    def test_update_lead(self):
        data = {"contacted": True}
        response = self.client.patch(self.detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.lead.refresh_from_db()
        self.assertTrue(self.lead.contacted)

    # ---- DELETE ----
    def test_delete_lead(self):
        response = self.client.delete(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Lead.objects.count(), 0)
