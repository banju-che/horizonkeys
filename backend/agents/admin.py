from django.contrib import admin
from .models import Agent

@admin.register(Agent)
class AgentAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "location", "rating", "verified")
    search_fields = ("name", "email", "location")
    list_filter = ("verified", "location")
