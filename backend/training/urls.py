from django.urls import path
from .views import (
    TrainingCreateAPIView,
    TrainingUpdateAPIView,
    training_detail,
    UserRegisterTrainingCreateAPIView,
    TrainingrelationUpdateAPIView,
    trainingrelation_delete,
    training_register_detail,
    RegisterableTrainingView
)

urlpatterns = [
    path("create-training/", TrainingCreateAPIView.as_view(), name="create-training"),
    path("create-register/", UserRegisterTrainingCreateAPIView.as_view(),
         name="create-register"),
    path("<str:pk>/", training_detail, name="training-detail"),
    path("update/<str:training_id>/",
         TrainingUpdateAPIView.as_view(), name="update-training"),
    path("update-relation/<str:user_id>-<str:training_id>/",
         TrainingrelationUpdateAPIView.as_view(), name="update-relation"),
    path("relation/delete/<str:user_id>-<str:training_id>/",
         trainingrelation_delete, name="trainingrelation-delete"),
    path("registered/<str:pk>/", training_register_detail, name="training-register"),
    path("list/registerable/", RegisterableTrainingView.as_view(),
         name="training-registerable"),
]
