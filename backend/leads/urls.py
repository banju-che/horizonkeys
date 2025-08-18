from django.urls import path
from .views import (
    LeadListCreateView,
    LeadRetrieveUpdateDeleteView
)

urlpatterns = [
    path('leads/', LeadListCreateView.as_view(), name='lead-list-create'),
    path('lead/<int:pk>', LeadRetrieveUpdateDeleteView.as_view(), name='lead-detail')
]