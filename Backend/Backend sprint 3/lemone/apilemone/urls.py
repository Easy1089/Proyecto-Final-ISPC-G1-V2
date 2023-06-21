from django.urls import path
from .views import CategoriaView, ProductoView, UsuariosView

urlpatterns = [
    path('productos/', ProductoView.as_view(), name='productos_list'),
    path('categorias/', CategoriaView.as_view(), name='categorias_list'),
    path('usuarios/', UsuariosView.as_view(), name='usuarios_list'),
    path('productos/<int:producto_id>/',
         ProductoView.as_view(), name='producto-detail'),
     path('usuarios/<int:usuario_id>/',
         UsuariosView.as_view(), name='usuario-detail'),
]
