from django.contrib import admin
from.models import Training, UserRegisterTraining


class TrainingAdmin(admin.ModelAdmin):
    list_display = ("name", "starting_time",)
    ordering = ("starting_time",)


class RegisterAdmin(admin.ModelAdmin):
    list_display = ("user", "training", "status",)
    ordering = ("training", "status",)


admin.site.register(Training, TrainingAdmin)
admin.site.register(UserRegisterTraining, RegisterAdmin)
