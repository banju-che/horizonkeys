from django.core.management.base import BaseCommand
from faker import Faker
from properties.models import Property
from leads.models import Lead
from django.contrib.auth import get_user_model
import random

User = get_user_model()

class Command(BaseCommand):
    help = "Seed the database with fake properties and leads"

    def handle(self, *args, **kwargs):
        fake = Faker()

        # --- Create an agent ---
        agent, created = User.objects.get_or_create(
            username='agent1',
            defaults={'email': 'agent1@example.com', 'password': 'password123'}
        )

        PROPERTY_TYPES = ['apartment', 'house', 'land']

        # --- Create properties ---
        properties = []
        for _ in range(10):  # Adjust number of properties as needed
            prop = Property.objects.create(
                title=fake.sentence(nb_words=4),
                description=fake.paragraph(nb_sentences=3),
                price=round(random.uniform(50000, 500000), 2),
                property_type=random.choice(PROPERTY_TYPES),
                location=fake.city(),
                bedrooms=random.randint(1, 5),
                bathrooms=random.randint(1, 4),
                square_feet=random.randint(500, 5000),
                agent=agent,
                status='available',
                image='https://res.cloudinary.com/demo/image/upload/sample.jpg'  # placeholder
            )
            properties.append(prop)

        # --- Create leads ---
        for _ in range(30):  # Adjust number of leads as needed
            property_choice = random.choice(properties)
            Lead.objects.create(
                property=property_choice,
                name=fake.name(),
                email=fake.email(),
                message=fake.sentence(nb_words=10),
                contacted=random.choice([True, False])
            )

        self.stdout.write(self.style.SUCCESS('Database seeded with fake properties and leads!'))
