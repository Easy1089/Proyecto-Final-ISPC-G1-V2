from rest_framework.views import APIView
from rest_framework.response import Response

from authentication.models import CustomUser
from .models import Producto
from .serializers import ProductoSerializer, UsuarioSerializer
from django.views import View
from django.http import JsonResponse

class ProductoView(APIView):
    def get(self, request):
        productos = Producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)
        if len(serializer.data) > 0:
            datos = {'message': 'Success', 'productos': serializer.data}
        else:
            datos = {'message': 'Productos no encontrados...'}
        return Response(datos)
    
    def post(self, request):
        pass
    
    def put(self, request):
        pass
    
    def delete(self, request):
        pass

class UsuariosView(APIView):
    def get(self, request):
        usuarios = CustomUser.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        if len(serializer.data) > 0:
            datos = {'message': 'Success', 'usuarios': serializer.data}
        else:
            datos = {'message': 'Usuarios no encontrados...'}
        return Response(datos)
    
