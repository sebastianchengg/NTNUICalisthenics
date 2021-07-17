from .serializer import (
    TrainingCreateSerializer,
    TrainingSerializer,
    UserRegisterTrainingCreateSerializer,
    UserRegisterTrainingSerializer,)
from .models import Training, UserRegisterTraining
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status, mixins


class TrainingCreateAPIView(generics.CreateAPIView):
    serializer_class = TrainingCreateSerializer
    # permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        training = serializer.save()

        return Response(
            TrainingCreateSerializer(
                training, context=self.get_serializer_context()).data
        )


class UserRegisterTrainingCreateAPIView(generics.CreateAPIView):
    serializer_class = UserRegisterTrainingCreateSerializer
    # permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_register_training = serializer.save()

        return Response(
            UserRegisterTrainingCreateSerializer(
                user_register_training, context=self.get_serializer_context()).data
        )


@api_view(["GET"])
def training_register_detail(request, pk):

    user = UserRegisterTraining.objects.filter(training=pk).all()
    serializer = UserRegisterTrainingSerializer(user, many=True)
    return Response(serializer.data)
