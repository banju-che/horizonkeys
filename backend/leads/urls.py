from django.urls import path
from .views import (
    LeadListCreateView,
    LeadRetrieveUpdateDeleteView
)

urlpatterns = [
    path('', LeadListCreateView.as_view(), name='lead-list-create'),
    path('<int:pk>', LeadRetrieveUpdateDeleteView.as_view(), name='lead-detail')
]