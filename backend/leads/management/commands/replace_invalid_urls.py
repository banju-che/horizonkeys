# core/management/commands/fix_images.py
import random
from urllib.request import urlopen
from django.core.management.base import BaseCommand
import cloudinary
import cloudinary.api

# Import your models
from properties.models import Property
from blogs.models import Blogs
from cities.models import City
from categories.models import Category
from agents.models import Agent


class Command(BaseCommand):
    help = "Replace invalid or broken image URLs with valid Cloudinary URLs"

    def handle(self, *args, **options):
        # -----------------------------
        # Configure Cloudinary
        # -----------------------------
        cloudinary.config(
            cloud_name='dwiaiz7b0',
            api_key='387894422618679',
            api_secret='Cz2QrJzPumN3dHLIL7_oghrxaaU'
        )

        # -----------------------------
        # Fetch Cloudinary URLs
        # -----------------------------
        resources = cloudinary.api.resources(type='upload', max_results=500)
        cloudinary_urls = [res['secure_url'] for res in resources['resources']]

        # -----------------------------
        # Invalid URL patterns
        # -----------------------------
        invalid_keywords = ["demo", "placeholder", "1", "null", "house_placeholder"]

        # -----------------------------
        # Helper to check if URL is valid
        # -----------------------------
        def is_valid_url(url):
            if not url or not isinstance(url, str) or url.strip() == "":
                return False
            try:
                with urlopen(url) as response:
                    return response.status == 200
            except Exception:
                return False

        # -----------------------------
        # Function to update a single field
        # -----------------------------
        def update_field(obj, model_name, field_name, cloud_idx):
            img_field = getattr(obj, field_name, None)
            if not isinstance(img_field, str):
                img_field = str(img_field) if img_field else ""

            if not img_field or any(k in img_field for k in invalid_keywords) or not is_valid_url(img_field):
                new_url = cloudinary_urls[cloud_idx % len(cloudinary_urls)]
                setattr(obj, field_name, new_url)
                obj.save(update_fields=[field_name])
                cloud_idx += 1
                print(f"Updated {model_name} ID {obj.id} field '{field_name}'")
            return cloud_idx

        # -----------------------------
        # Update models
        # -----------------------------
        total_updated = 0
        cloud_idx = 0

        # Properties
        for prop in Property.objects.all():
            cloud_idx = update_field(prop, "Property", "image", cloud_idx)
            total_updated += 1

        # Blogs
        for blog in Blogs.objects.all():
            cloud_idx = update_field(blog, "Blog", "image", cloud_idx)
            total_updated += 1

        # Cities
        for city in City.objects.all():
            cloud_idx = update_field(city, "City", "img", cloud_idx)
            total_updated += 1

        # Categories
        for cat in Category.objects.all():
            cloud_idx = update_field(cat, "Category", "img", cloud_idx)
            total_updated += 1

        # Agents: avatar and cover only
        for agent in Agent.objects.all():
            cloud_idx = update_field(agent, "Agent", "avatar", cloud_idx)
            total_updated += 1
            cloud_idx = update_field(agent, "Agent", "cover", cloud_idx)
            total_updated += 1

        self.stdout.write(self.style.SUCCESS(f"Done! Updated {total_updated} image fields."))
