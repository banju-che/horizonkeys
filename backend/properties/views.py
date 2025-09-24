from rest_framework import generics, permissions
from rest_framework.pagination import PageNumberPagination
from .models import Property
from .serializers import PropertySerializer

# ----- PROPERTY VIEWS -----
class PropertyPagination(PageNumberPagination):
    page_size = 15

class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
     # Filtering & Search
    filterset_fields = {
        'category__title': ['exact'],  
        'price': ['exact', 'gte', 'lte'],  
        'location': ['icontains'], 
    }
    search_fields = ['title', 'description']
    ordering_fields = ['price', 'created_at']
   
    #pagination
    pagination_class = PropertyPagination

class PropertyRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
