from django.urls import path
from .views import ProductoView, UsuariosView

urlpatterns=[
    path('productos/', ProductoView.as_view(), name='productos_list'),
    path('usuarios/', UsuariosView.as_view(), name='usuarios_list'),
    path('api/productos/<int:producto_id>/', ProductoView.as_view(), name='producto-detail'),
]