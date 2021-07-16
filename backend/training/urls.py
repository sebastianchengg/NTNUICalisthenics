from django.urls import path
from .views import (
    TrainingCreateAPIView,
    WeekCreateAPIView,
    UserRegisterTrainingCreateAPIView,
)

urlpatterns = [
    path("create-training/", TrainingCreateAPIView.as_view(), name="create-training"),
    path("create-week/", WeekCreateAPIView.as_view(), name="create-week"),
    path("create-register/", UserRegisterTrainingCreateAPIView.as_view(), name="create-register"),
]
