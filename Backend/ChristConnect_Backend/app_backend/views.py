from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import post_table
from .serializers import post_tableSerializer

@api_view(['GET'])
def viewAllPostsAPI(request):
    if request.method == 'GET':
        posts = post_table.objects.all().order_by('-post_id')
        serializer = post_tableSerializer(posts, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def postAPI(request):
    if request.method == 'POST':
        serializer = post_tableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
