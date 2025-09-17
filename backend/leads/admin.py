from django.contrib import admin
from .models import Lead

@admin.register(Lead)
class LeadRegister(admin.ModelAdmin):
    list_display = ("name", "email", "property", "contacted", "created_at")
    list_filter = ("contacted", "created_at", "property")
    search_fields = ("name", "email", "message", "property__title")
    list_editable = ("contacted",)
    readonly_fields = ("created_at",)

