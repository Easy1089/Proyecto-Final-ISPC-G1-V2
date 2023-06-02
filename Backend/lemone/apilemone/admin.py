from django.contrib import admin

# Register your models here.
from .models import Producto
from .models import Categoria


class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion', 'activoactualmente')
  
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'nombre', 'descripcion', 'inventariominimo', 'preciodecosto', 'preciodeventa', 'activoactualmente', 'categoria')

admin.site.register(Categoria, CategoriaAdmin)          
admin.site.register(Producto, ProductoAdmin)
