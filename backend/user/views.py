from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import (
    RegisterSerializer,
    UserSerializer,
)
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

class RegisterAPIView(generics.GenericAPIView):
    """
    REST API view for registering a new user. Supports POST
    requests
    """

    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "message": "User created successfully!",
            }
        )


class SelfAPIView(generics.GenericAPIView):
    """
    REST API view for getting and editing the user that is currently logged in.
    Supports GET requests and PUT requests.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user_self = UserSerializer(request.user, read_only=True)
        return Response(user_self.data)
    
    def put(self, request, *args, **kwargs):
        user_to_modify = get_user_model().objects.get(id=request.user.id)
        print(user_to_modify.first_name)

        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return Response({"user": UserSerializer(request.user).data})
