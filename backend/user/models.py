from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import RegexValidator
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.dispatch import receiver
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail
from .user_manager import UserManager

# Simple regex validator for validating a phone number
PHONE_REGEX = RegexValidator(
    regex=r"^\+?1?\d{9,15}$",
    message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.",
)


class User(AbstractBaseUser, PermissionsMixin):
    """
    Modified user to use email as USERNAME_FIELD, instead of a separate username
    """

    class Meta:
        verbose_name = _("User")

    id = models.AutoField(primary_key=True)

    email = models.EmailField(
        _("email address"), unique=True, max_length=63, blank=False
    )
    first_name = models.CharField(
        _("first name"), null=False, blank=False, max_length=31
    )
    last_name = models.CharField(
        _("last name"), null=False, blank=False, max_length=31
    )

    phone_number = models.CharField(
        validators=[PHONE_REGEX], max_length=17, blank=True)

    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into the admin site."),
    )

    is_active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )

    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)

    # Overridden manager to allow for
    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]


# Sends reset password email to user
@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    # Have to change this to https://ntnuicalisthenics.no/
    email_plaintext_message = "You're receiving this email because you requested a password reset for your user account at https://ntnuicalisthenics.no/\n\nPlease go to the following page and choose a new password:\n\n{}{}token={}\n\nThe Calisthenics IT-crew".format("http://localhost:3000/", "reset-password-confirm/",
                                                                                                                                                                                                                                                                           reset_password_token.key)

    send_mail(
        # title:
        "NTNUI Calisthenics - Reset password",
        # message:
        email_plaintext_message,
        # from:
        "ntnuicalisthenics@gmail.com",
        # to:
        [reset_password_token.user.email]
    )
