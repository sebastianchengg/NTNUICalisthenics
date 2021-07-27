from django.urls import path
from .views import (
    TrainingCreateAPIView,
    UserRegisterTrainingCreateAPIView,
    trainingrelation_delete,
    training_register_detail,
    RegisterableTrainingView
)

urlpatterns = [
    path("create-training/", TrainingCreateAPIView.as_view(), name="create-training"),
    path("create-register/", UserRegisterTrainingCreateAPIView.as_view(),
         name="create-register"),
    path("relation/delete/<str:user_id>-<str:training_id>/",
         trainingrelation_delete, name="trainingrelation-delete"),
    path("<str:pk>/", training_register_detail, name="training-register"),
    path("list/registerable/", RegisterableTrainingView.as_view(),
         name="training-registerable"),
]
