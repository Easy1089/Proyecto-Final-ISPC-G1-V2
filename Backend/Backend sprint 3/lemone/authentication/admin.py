from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group  
from django.dispatch import receiver
from django_rest_passwordreset.signals import reset_password_token_created

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

admin.site.unregister(Group) 

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    # Aquí deberíamos mandar un correo al cliente...
    print(
        f"\nRecupera la contraseña del correo '{reset_password_token.user.email}' usando el token '{reset_password_token.key}' desde la API http://localhost:8000/api/auth/reset/confirm/.")