from django.contrib import admin
from django.utils.html import format_html
from .models import Property

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "location", "status", "agent", "image")
    list_filter = ("status", "location", "property_type")
    search_fields = ("title", "description", "location", "agent__username")

