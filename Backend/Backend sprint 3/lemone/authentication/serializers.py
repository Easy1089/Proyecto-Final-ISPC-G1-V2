from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username',
                  'password', 'first_name', 'last_name', 'is_superuser',
                  'is_staff', 'is_active', 'imagen', 'direccion', 'fechadenacimiento']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_superuser=validated_data['is_superuser'],
            is_staff=validated_data['is_staff'],
            is_active=validated_data['is_active'],
            imagen=validated_data['imagen'],
            direccion=validated_data['direccion'],
            fechadenacimiento=validated_data['fechadenacimiento'],
        )
        return user

    # class Meta:
        #model = get_user_model()
        #fields = ('email', 'username', 'password')

    # Encriptación de password usando make_password
    def validate_password(self, value):
        return make_password(value)
