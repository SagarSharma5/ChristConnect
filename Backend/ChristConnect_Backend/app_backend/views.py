from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import post_table
from .serializers import post_tableSerializer
from django.contrib.auth.models import User

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

@api_view(['DELETE'])
def deletePostAPI(request, post_id):
    try:
        post = post_table.objects.get(post_id=post_id)
    except post_table.DoesNotExist:
        return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        post.delete()
        return Response({'message': 'Post deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def signup(request):
    data = request.data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    username = data.get('username')
    password = data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful', 'user_id': user.id, 'username': user.username}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
