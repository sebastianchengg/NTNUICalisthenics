from django.db import models
from django.utils.translation import ugettext_lazy as _
from user.models import User
from datetime import datetime, date


class Training(models.Model):

    class Meta:
        verbose_name = _("Training")

    id = models.AutoField(primary_key=True)
    name = models.CharField(_("first name"), null=False, blank=False, max_length=127)
    registered = models.ManyToManyField(User, _("registered"), blank=True, null=True)
    waiting_list = models.ManyToManyField(User, _("waiting list"), blank=True, null=True)
    max_registered = models.models.PositiveSmallIntegerField(_("max registered"))
    starting_time = models.DateTimeField(_("starting time"), auto_now_add=False, auto_now=False)
    finishing_time = models.DateTimeField(_("finishing time"), auto_now_add=False, auto_now=False)