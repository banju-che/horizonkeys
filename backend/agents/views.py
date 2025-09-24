from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Agent
from .serializers import AgentSerializer

@api_view(["GET"])
def agent_list(request):
    agents = Agent.objects.all()
    serializer = AgentSerializer(agents, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def agent_detail(request, slug):
    try:
        agent = Agent.objects.get(profile_url=slug)
    except Agent.DoesNotExist:
        return Response({"error": "Agent not found"}, status=404)
    serializer = AgentSerializer(agent)
    return Response(serializer.data)
