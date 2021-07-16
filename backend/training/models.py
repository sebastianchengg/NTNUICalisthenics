from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.translation import ugettext_lazy as _
from user.models import User
from datetime import datetime, date


class Week(models.Model):

    id = models.AutoField(primary_key=True)
    week_number = models.PositiveSmallIntegerField()
    year = models.PositiveSmallIntegerField(null=True)
    release_training = models.DateTimeField(auto_now_add=False, auto_now=False)

    class Meta:
        verbose_name = _("Week")
        unique_together = (("week_number", "year"),)

    def __str__(self):
        return self.week_number


class Training(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(null=False, blank=False, max_length=127)
    trainer = models.CharField(
        null=False, blank=False, max_length=127, default='-')
    max_registered = models.PositiveSmallIntegerField()
    starting_time = models.DateTimeField(auto_now_add=False, auto_now=False)
    finishing_time = models.DateTimeField(auto_now_add=False, auto_now=False)
    week = models.ForeignKey(Week, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = _("Training")

    def __str__(self):
        return str(self.starting_time.strftime('%b %d'))


class UserRegisterTraining(models.Model):

    class TrainingStatus(models.TextChoices):
        REG = "REGISTERED"
        WAIT = "WAITINGLIST"

    user = models.ForeignKey(User, on_delete=CASCADE)
    training = models.ForeignKey(Training, on_delete=CASCADE)
    status = models.CharField(
        max_length=15, choices=TrainingStatus.choices, default=TrainingStatus.WAIT)

    class Meta:
        unique_together = (("user", "training"),)
