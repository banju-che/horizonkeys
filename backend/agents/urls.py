from django.urls import path
from . import views

urlpatterns = [
    path("", views.agent_list, name="agent-list"),
    path("<slug:slug>/", views.agent_detail, name="agent-detail"),
]
