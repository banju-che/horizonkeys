from django.contrib import admin
from .models import Blogs   

@admin.register(Blogs)
class BlogRegister(admin.ModelAdmin):
    list_display = ["author", "title", "is_published", "created_at"]
    list_filter = ["is_published", "created_at"]
    search_fields = ["title", "content", "author__username"]
    ordering = ["-created_at"]
    readonly_fields = ["created_at", "updated_at"]
