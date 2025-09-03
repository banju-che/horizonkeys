# properties/tests/test_models.py
from django.test import TestCase
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from properties.models import Property

User = get_user_model()

class PropertyModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="agent1", password="testpass123"
        )
        self.valid_data = {
            "title": "Cozy Apartment",
            "description": "A very nice place to live",
            "price": 150000.00,
            "property_type": "apartment",
            "location": "Downtown",
            "bedrooms": 2,
            "bathrooms": 1,
            "square_feet": 850,
            "status": "available",
            # CloudinaryField can accept a string path for testing
            "image": "test.jpg",
            "agent": self.user,
        }

    def test_property_creation(self):
        prop = Property.objects.create(**self.valid_data)
        self.assertEqual(prop.title, "Cozy Apartment")
        self.assertEqual(prop.agent, self.user)

    def test_str_representation(self):
        prop = Property.objects.create(**self.valid_data)
        self.assertEqual(str(prop), "Cozy Apartment")

    def test_default_status_is_available(self):
        data = self.valid_data.copy()
        data.pop("status")  # omit on purpose
        prop = Property.objects.create(**data)
        self.assertEqual(prop.status, "available")

    def test_price_cannot_be_negative(self):
        data = self.valid_data.copy()
        data["price"] = -500
        prop = Property(**data)
        with self.assertRaises(ValidationError):
            prop.full_clean()

    def test_property_type_must_be_valid_choice(self):
        data = self.valid_data.copy()
        data["property_type"] = "castle"  # not in choices
        prop = Property(**data)
        with self.assertRaises(ValidationError):
            prop.full_clean()

    def test_agent_relationship(self):
        prop = Property.objects.create(**self.valid_data)
        self.assertEqual(prop.agent.username, "agent1")
        self.assertIn(prop, self.user.property.all())
