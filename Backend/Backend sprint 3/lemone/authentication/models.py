from datetime import date
from django.contrib.auth.models import AbstractUser
from django.db import models
import django


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    imagen = models.CharField(max_length=250, default="", blank=True)
    direccion = models.CharField(max_length=250, default="", blank=True)
    fechadenacimiento = models.DateField(blank=True, null=True)

    USERNAME_FIELD = 'email'  # new
    REQUIRED_FIELDS = ['username', 'password']  # new

    def save(self, *args, **kwargs):
        self.is_staff = True
        self.is_active = True
        super().save(*args, **kwargs)
