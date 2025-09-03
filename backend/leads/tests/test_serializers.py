from django.test import TestCase
from django.contrib.auth import get_user_model
from properties.models import Property
from leads.models import Lead
from leads.serializers import LeadSerializer

User = get_user_model()

class LeadSerializerTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="agent", password="pass123")
        self.property = Property.objects.create(
            title="Cozy Apartment",
            description="Nice 2-bedroom",
            price=120000,
            location="Mombasa",
            agent=self.user
        )
        self.lead = Lead.objects.create(
            property=self.property,
            name="Jane Doe",
            email="jane@example.com",
            message="Interested in this property"
        )

    def test_lead_serialization(self):
        serializer = LeadSerializer(self.lead)
        data = serializer.data
        self.assertEqual(data["name"], "Jane Doe")
        self.assertEqual(data["property"], self.property.id)
        self.assertEqual(data["property_title"], self.property.title)

    def test_lead_deserialization_valid(self):
        data = {
            "property": self.property.id,
            "name": "Alice",
            "email": "alice@example.com",
            "message": "Can I schedule a visit?"
        }
        serializer = LeadSerializer(data=data)
        self.assertTrue(serializer.is_valid(), serializer.errors)
        lead = serializer.save()
        self.assertEqual(lead.name, "Alice")

    def test_lead_deserialization_invalid(self):
        data = {
            "property": self.property.id,
            "name": "",
            "email": "not-an-email",
            "message": ""
        }
        serializer = LeadSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("name", serializer.errors)
        self.assertIn("email", serializer.errors)
