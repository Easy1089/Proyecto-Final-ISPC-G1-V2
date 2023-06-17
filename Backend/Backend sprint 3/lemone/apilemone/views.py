from datetime import date
from rest_framework.views import APIView
from rest_framework.response import Response
from authentication.models import CustomUser
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer, UsuarioSerializer
from django.views import View
from django.http import JsonResponse


class ProductoView(APIView):
    def get(self, request, producto_id=None):
        if producto_id is None:
            # Obtener todos los productos
            productos = Producto.objects.all()
            serializer = ProductoSerializer(productos, many=True)
            if len(serializer.data) > 0:
                datos = {'message': 'Success', 'productos': serializer.data}
            else:
                datos = {'message': 'Productos no encontrados...'}
        else:
            # Obtener un producto específico por ID
            try:
                producto = Producto.objects.get(id=producto_id)
                serializer = ProductoSerializer(producto)
                datos = {'message': 'Success', 'producto': serializer.data}
            except Producto.DoesNotExist:
                datos = {'message': 'Producto no encontrado...'}
        return Response(datos)

    def post(self, request):
        # Obtener los datos del producto del cuerpo de la solicitud JSON
        datos = request.data
        datos_producto = datos.get('producto')
        usuario = datos.get('usuario')

        # Obtener la instancia de Categoria correspondiente al ID proporcionado
        categoria_id = datos_producto['categoria']
        categoria = Categoria.objects.get(id=categoria_id)

        # Obtener la instancia de CustomUser correspondiente al nombre de usuario proporcionado
        usuarioalta = CustomUser.objects.get(id=usuario['id'])

        # Crear el producto en la base de datos
        producto = Producto.objects.create(
            codigo=datos_producto['codigo'],
            nombre=datos_producto['nombre'],
            descripcion=datos_producto['descripcion'],
            inventariominimo=datos_producto['inventariominimo'],
            preciodecosto=datos_producto['preciodecosto'],
            preciodeventa=datos_producto['preciodeventa'],
            categoria=categoria,
            activoactualmente=datos_producto['activoactualmente'],
            imagen=datos_producto['imagen'],
            estado=datos_producto['estado'],
            usuarioalta=usuarioalta,
            fechaalta=date.today(),
            usuariomodificacion=None,
            fehamodificacion=None
        )
        # Devolver una respuesta exitosa
        return Response(datos_producto)

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


class CategoriaView(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        if len(serializer.data) > 0:
            datos = {'message': 'Success', 'categorias': serializer.data}
        else:
            datos = {'message': 'Categorías no encontradas...'}
        return Response(datos)
