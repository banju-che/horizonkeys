from django.test import TestCase
from django.contrib.auth import get_user_model
from properties.models import Property
from leads.models import Lead

User = get_user_model()

class LeadModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="agent", password="pass123")
        self.property = Property.objects.create(
            title="Luxury Villa",
            description="A big house",
            price=500000,
            location="Nairobi",
            agent=self.user
        )
        self.lead = Lead.objects.create(
            property=self.property,
            name="John Doe",
            email="john@example.com",
            message="Is this still available?"
        )

    def test_str_method(self):
        self.assertEqual(
            str(self.lead),
            f"Inquiry for {self.property.title} from John Doe"
        )
