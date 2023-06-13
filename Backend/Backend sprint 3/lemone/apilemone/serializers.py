from rest_framework import serializers
from authentication.models import CustomUser
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
