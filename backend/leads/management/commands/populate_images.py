import requests
from django.core.management.base import BaseCommand
from properties.models import Property
from cloudinary.uploader import upload
import random
import time
import os


CATEGORY_IMAGE_QUERIES = {
    "Apartments": ["apartment", "flat", "condo"],
    "Villas": ["villa", "luxury-villa"],
    "Bungalows": ["bungalow", "cottage"],
    "Townhouses": ["townhouse", "row-house"],
    "Commercial": ["office-building", "commercial-property"],
    "Land": ["land", "plot", "farmland"],
    "Luxury": ["luxury-house", "mansion"],
    "Rentals": ["rental-house", "apartment-for-rent"],
}


class Command(BaseCommand):
    help = "Replace all property images with Unsplash + Cloudinary images (category-based)"

    def handle(self, *args, **options):
        properties = Property.objects.all()
        self.stdout.write(f"Found {properties.count()} properties. Updating images...")

        for prop in properties:
            try:
                category_name = prop.category.title if prop.category else "General"
                queries = CATEGORY_IMAGE_QUERIES.get(category_name, ["real-estate"])

                # Pick a random query for variety
                query = random.choice(queries)
                url = f"https://source.unsplash.com/random/800x600/?{query}"

                self.stdout.write(f"Fetching new image for {prop.title} [{category_name}]")

                # Cloudinary upload directly from Unsplash
                upload_result = upload(
                    url,
                    folder="horizonkeys/properties",
                    public_id=f"property_{prop.id}",
                    overwrite=True,
                )

                prop.image = upload_result["secure_url"]
                prop.save()

                self.stdout.write(self.style.SUCCESS(
                    f"✅ Updated {prop.title} ({category_name}) → {upload_result['secure_url']}"
                ))

                time.sleep(2)  # avoid API hammering

            except Exception as e:
                self.stdout.write(self.style.ERROR(
                    f"❌ Error for {prop.title}: {str(e)}"
                ))
