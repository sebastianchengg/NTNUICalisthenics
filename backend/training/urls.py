from django.urls import path
from .views import (
    TrainingCreateAPIView,
    UserRegisterTrainingCreateAPIView,
    training_register_detail,
)

urlpatterns = [
    path("create-training/", TrainingCreateAPIView.as_view(), name="create-training"),
    path("create-register/", UserRegisterTrainingCreateAPIView.as_view(),
         name="create-register"),
    path("<str:pk>/", training_register_detail, name="training-register"),
]
