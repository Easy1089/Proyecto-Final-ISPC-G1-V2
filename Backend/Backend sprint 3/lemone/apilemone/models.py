import datetime
import django
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from authentication.models import CustomUser

# Create your models here.
class Categoria(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)
    descripcion = models.TextField(max_length=1000, blank=False)
    activoactualmente = models.BooleanField(default=True)
    estado = models.CharField(max_length=1, default="A")
    class Meta:
        db_table = 'categoria'
        verbose_name = 'Categoria'
        verbose_name_plural = "Categorias"
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Producto(models.Model):
    id= models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=20, blank=False)
    nombre = models.CharField(max_length=50, blank=False)
    descripcion = models.TextField(max_length=250, blank=False)
    inventariominimo = models.IntegerField(blank=False, default=20)
    preciodecosto =  models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    preciodeventa =  models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    categoria = models.ForeignKey(Categoria, to_field='id', on_delete=models.CASCADE)
    activoactualmente = models.BooleanField(default=True)
    imagen=models.CharField(max_length=150, blank=True)
    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(CustomUser, to_field='id', on_delete=models.CASCADE, related_name='producto_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)
    usuariomodificacion = models.ForeignKey(CustomUser, to_field='id', on_delete=models.CASCADE, related_name='producto_usuariomodificacion', blank=True, null=True)
    fehamodificacion = models.DateField(default=django.utils.timezone.now, blank=True, null=True)
    class Meta:
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = "Productos"
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
