from django.urls import path
from .views import (
    TrainingCreateAPIView,
    WeekCreateAPIView,
)

urlpatterns = [
    path("create-training/", TrainingCreateAPIView.as_view(), name="create-training"),
    path("create-week/", WeekCreateAPIView.as_view(), name="create-week")
]
