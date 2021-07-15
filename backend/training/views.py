from .serializer import (WeekCreateSerializer,
                         TrainingCreateSerializer, TrainingSerializer)
from .models import Training
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics, status, mixins


class WeekCreateAPIView(generics.CreateAPIView):
    serializer_class = WeekCreateSerializer
    # permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        week = serializer.save()

        return Response(
            WeekCreateSerializer(
                week, context=self.get_serializer_context()).data
        )


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