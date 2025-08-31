from django.urls import path
from .views import (
    PropertyListCreateView,
    PropertyRetrieveUpdateDeleteView
)

urlpatterns = [
    path('', PropertyListCreateView.as_view(), name='property-list-create'),
    path('<int:pk>', PropertyRetrieveUpdateDeleteView.as_view(), name='property-detail')
]