from django.contrib import admin
from .models import Property

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "location", "status", "agent", "listed_date")
    list_filter = ("status", "location", "property_type", "listed_date")
    search_fields = ("title", "description", "location", "agent__username")
    ordering = ("-listed_date",)

