from django.contrib import admin
from.models import Week, Training, UserRegisterTraining

class WeekAdmin(admin.ModelAdmin):
    list_display = ("week_number", "year",)
    ordering = ("year", "week_number",)

class TrainingAdmin(admin.ModelAdmin):
    list_display = ("name", "starting_time",)
    ordering = ("starting_time",)

class RegisterAdmin(admin.ModelAdmin):
    list_display = ("user", "training", "status",)
    ordering = ("training", "status",)

admin.site.register(Week, WeekAdmin)
admin.site.register(Training, TrainingAdmin)
admin.site.register(UserRegisterTraining, RegisterAdmin)

