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
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=20, blank=False)
    nombre = models.CharField(max_length=50, blank=False)
    descripcion = models.TextField(max_length=250, blank=False)
    inventariominimo = models.IntegerField(blank=False, default=20)
    preciodecosto = models.DecimalField(
        blank=False, default=2000, decimal_places=2, max_digits=10)
    preciodeventa = models.DecimalField(
        blank=False, default=2000, decimal_places=2, max_digits=10)
    categoria = models.ForeignKey(
        Categoria, to_field='id', on_delete=models.CASCADE)
    activoactualmente = models.BooleanField(default=True)
    imagen = models.CharField(max_length=150, blank=True)
    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='producto_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)
    usuariomodificacion = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='producto_usuariomodificacion', blank=True, null=True)
    fehamodificacion = models.DateField(
        default=django.utils.timezone.now, blank=True, null=True)

    class Meta:
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = "Productos"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class EstadoDeOrden(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'estadodeorden'
        verbose_name = 'EstadoDeOrden'
        verbose_name_plural = "EstadosDeOrden"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class MedioDePago(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'mediodepago'
        verbose_name = 'MedioDePago'
        verbose_name_plural = "MediosDePago"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class TipoDePersona(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'tipodePersona'
        verbose_name = 'TipoDePersona'
        verbose_name_plural = "TiposDePersona"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre


# Create your models here.
class TipoDeOperacion(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'tipodeoperacion'
        verbose_name = 'TipoDeOperacion'
        verbose_name_plural = "TiposDeOperacion"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class TipoDeEnvio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'tipodeenvio'
        verbose_name = 'TipoDeEnvio'
        verbose_name_plural = "TiposDeEnvio"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class Persona(models.Model):
    id = models.AutoField(primary_key=True)
    apellido = models.CharField(max_length=100, blank=False)
    nombre = models.CharField(max_length=100, blank=False)
    telefono = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    tipodepersona = models.ForeignKey(
        TipoDePersona, to_field='id', on_delete=models.CASCADE)
    activoactualmente = models.BooleanField(default=True)
    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='persona_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)
    usuariomodificacion = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='persona_usuariomodificacion', blank=True, null=True)
    fehamodificacion = models.DateField(
        default=django.utils.timezone.now, blank=True, null=True)

    class Meta:
        db_table = 'persona'
        verbose_name = 'Persona'
        verbose_name_plural = "Personas"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre

# Create your models here.


class Operacion(models.Model):
    id = models.AutoField(primary_key=True)
    persona = models.ForeignKey(
        Persona, to_field='id', on_delete=models.CASCADE)
    tipodeoperacion = models.ForeignKey(
        TipoDeOperacion, to_field='id', on_delete=models.CASCADE)
    producto = models.ForeignKey(
        Producto, to_field='id', on_delete=models.CASCADE)
    cantidad = models.IntegerField(blank=False)
    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='operacion_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)
    usuariobaja = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='operacion_usuariobaja', blank=True, null=True)
    fechabaja = models.DateField(
        default=django.utils.timezone.now, blank=True, null=True)

    class Meta:
        db_table = 'operacion'
        verbose_name = 'Operacion'
        verbose_name_plural = "Operaciones"

    def __unicode__(self):
        return self.id

    def __str__(self):
        return self.id


class Orden(models.Model):
    id = models.AutoField(primary_key=True)
    estadodeorden = models.ForeignKey(
        EstadoDeOrden, to_field='id', on_delete=models.CASCADE)
    nrodeorden = models.IntegerField(blank=False)
    nrodetransaccion = models.IntegerField(blank=False)
    persona = models.ForeignKey(
        Persona, to_field='id', on_delete=models.CASCADE)
    mediodepago = models.ForeignKey(
        MedioDePago, to_field='id', on_delete=models.CASCADE)
    tipodeenvio = models.ForeignKey(
        TipoDeEnvio, to_field='id', on_delete=models.CASCADE)
    importeneto = models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    importeiva = models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    importetotal = models.DecimalField(blank=False, decimal_places=2, max_digits=10)
    observaciones = models.CharField(max_length=250, blank=False)
    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='orden_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)

    class Meta:
        db_table = 'orden'
        verbose_name = 'Orden'
        verbose_name_plural = "Ordenes"

    def __unicode__(self):
        return self.id

    def __str__(self):
        return self.id


class OrdenDetalle(models.Model):
    id = models.AutoField(primary_key=True)
    orden = models.ForeignKey(
        Orden, to_field='id', on_delete=models.CASCADE)
    producto = models.ForeignKey(
        Producto, to_field='id', on_delete=models.CASCADE)
    cantidad = models.IntegerField(blank=False)
    observaciones = models.CharField(max_length=250, blank=False)

    estado = models.CharField(max_length=1, default="A")
    usuarioalta = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='ordendetalle_usuarioalta')
    fechaalta = models.DateField(default=django.utils.timezone.now)
    usuariobaja = models.ForeignKey(
        CustomUser, to_field='id', on_delete=models.CASCADE, related_name='ordendetalle_usuariobaja', blank=True, null=True)
    fechabaja = models.DateField(
        default=django.utils.timezone.now, blank=True, null=True)

    class Meta:
        db_table = 'orden_detalle'
        verbose_name = 'Orden_Detalle'
        verbose_name_plural = "Ordenes_Detalle"

    def __unicode__(self):
        return self.id

    def __str__(self):
        return self.id
