from rest_framework import generics, permissions
from .models import Property
from .serializers import PropertySerializer

# ----- PROPERTY VIEWS -----
class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
     # Filtering & Search
    filterset_fields = ['price', 'location']
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'created_at']

class PropertyRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
