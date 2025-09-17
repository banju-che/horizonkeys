from django.urls import path
from .views import (BlogListCreateview, BlogRetrieveUpdateDeleteView)

urlpatterns = [
    path('', BlogListCreateview.as_view(), name='lead-list-create'),
    path('<int:pk>', BlogRetrieveUpdateDeleteView.as_view(), name='lead-detail')
]

