from django.test import TestCase
from django.contrib.auth import get_user_model
from properties.models import Property
from properties.serializers import PropertySerializer

User = get_user_model()

class PropertySerializerTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="agent1", password="password123"
        )
        self.property = Property.objects.create(
            title="Cozy Apartment",
            description="A nice place to stay",
            price=100000,
            location="Nairobi",
            agent=self.user
        )
        self.valid_data = {
            "title": "Modern Villa",
            "description": "Spacious and luxurious",
            "price": 250000,
            "location": "Mombasa",
            "agent": self.user.id
        }
        self.invalid_data = {
            "title": "",  # Missing title
            "description": "No title property",
            "price": "abc",  # Invalid price
            "location": "Unknown",
            "agent": self.user.id
        }

    # ---- TEST SERIALIZATION (model -> JSON) ----
    def test_property_serialization(self):
        serializer = PropertySerializer(self.property)
        data = serializer.data
        self.assertEqual(data["title"], "Cozy Apartment")
        self.assertEqual(data["agent"], self.user.id)

    # ---- TEST VALID DESERIALIZATION (JSON -> model) ----
    def test_property_deserialization_valid(self):
        serializer = PropertySerializer(data=self.valid_data)
        self.assertTrue(serializer.is_valid())
        property_instance = serializer.save()
        self.assertEqual(property_instance.title, "Modern Villa")

    # ---- TEST INVALID DATA ----
    def test_property_deserialization_invalid(self):
        serializer = PropertySerializer(data=self.invalid_data)
        self.assertFalse(serializer.is_valid())
        self.assertIn("title", serializer.errors)
        self.assertIn("price", serializer.errors)
