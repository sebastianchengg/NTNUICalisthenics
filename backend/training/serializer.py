from rest_framework import serializers
from .models import Training, UserRegisterTraining


class TrainingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ("name",
                  "trainer",
                  "max_registered",
                  "starting_time",
                  "finishing_time",
                  "show_time",)

    def create(self, validated_data):
        return Training.objects.create(**validated_data)


class TrainingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Training
        fields = "__all__"


class UserRegisterTrainingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRegisterTraining
        fields = ("user", "training", "status",)


class UserRegisterTrainingSerializer(serializers.ModelSerializer):
    """
    Serializer for all user training relations
    """

    class Meta:
        model = UserRegisterTraining
        fields = "__all__"
