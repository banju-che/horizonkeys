from rest_framework import generics
from .serializers import BlogSerializer
from .models import Blogs

class BlogListCreateview(generics.ListCreateAPIView):
    queryset = Blogs.objects.all()
    serializer_class = BlogSerializer

class BlogRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blogs.objects.all()
    serializer_class = BlogSerializer
