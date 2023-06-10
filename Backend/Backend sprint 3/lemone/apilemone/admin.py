from django.contrib import admin

# Register your models here.
from .models import Producto
from .models import Categoria
from .models import TipoDeEnvio
from .models import TipoDeOperacion
from .models import TipoDePersona
from .models import EstadoDeOrden
from .models import MedioDePago
from .models import Persona
from .models import Orden
from .models import OrdenDetalle
from .models import Operacion


class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion', 'activoactualmente')


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'nombre', 'descripcion', 'inventariominimo',
                    'preciodecosto', 'preciodeventa', 'activoactualmente', 'categoria')


class PersonaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'telefono', 'email',
                    'activoactualmente', 'tipodepersona')


admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(TipoDeEnvio)
admin.site.register(EstadoDeOrden)
admin.site.register(MedioDePago)
admin.site.register(Persona, PersonaAdmin)
admin.site.register(Orden)
admin.site.register(OrdenDetalle)
admin.site.register(Operacion)
admin.site.register(TipoDeOperacion)
admin.site.register(TipoDePersona)
