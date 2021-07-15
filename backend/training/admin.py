from django.contrib import admin
from.models import Week, Training

class WeekAdmin(admin.ModelAdmin):
    list_display = ("week_number", "year",)
    ordering = ("year", "week_number",)

class TrainingAdmin(admin.ModelAdmin):
    list_display = ("name", "starting_time",)
    ordering = ("starting_time",)

admin.site.register(Week, WeekAdmin)
admin.site.register(Training, TrainingAdmin)


