from rest_framework import serializers
from .models import Training, Week, UserRegisterTraining


class WeekCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Week
        fields = ("week_number",
                  "year",
                  "release_training",
                  )

    def create(self, validated_data):
        return Week.objects.create(**validated_data)


class TrainingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ("name",
                  "trainer",
                  "max_registered",
                  "starting_time",
                  "finishing_time",
                  "week",)

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
