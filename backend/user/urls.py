from django.urls import path
from .views import (
    SelfAPIView,
    RegisterAPIView,
)

urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="user-register"),
    path("self/", SelfAPIView.as_view(), name="user-self"),
]