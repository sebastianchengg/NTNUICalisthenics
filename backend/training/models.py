from django.db import models
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


class Training(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(null=False, blank=False, max_length=127)
    trainer = models.CharField(
        null=False, blank=False, max_length=127, default='-')
    registered = models.ManyToManyField(User, _("registered"), blank=True)
    waiting_list = models.ManyToManyField(User, _("waiting_list"), blank=True)
    max_registered = models.PositiveSmallIntegerField()
    starting_time = models.DateTimeField(auto_now_add=False, auto_now=False)
    finishing_time = models.DateTimeField(auto_now_add=False, auto_now=False)
    week = models.ForeignKey(Week, on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        super(Training, self).save(*args, **kwargs)
        if self.registered.count() > self.max_registered:
            # append waiting list
            self.waiting_list.add(self.registered.last())
            # drop last registered
            self.registered.remove(self.registered.last())

        elif self.registered.count() < self.max_registered and self.waiting_list.count() > 0:
            self.registered.add(self.waiting_list.first())
            self.waiting_list.remove(self.waiting_list.first())

        super(Training, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Training")
