from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Temporary home view
def home(request):
    return HttpResponse("HorizonKeys Backend is live!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  
    path('api/properties/', include('properties.urls')),  
    path('api/leads/', include('leads.urls')),
    path('api/blogs/', include('blogs.urls')),
    path("api/", include("properties.urls")),
]
