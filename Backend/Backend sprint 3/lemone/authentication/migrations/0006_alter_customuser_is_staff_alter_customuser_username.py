# Generated by Django 4.2.2 on 2023-06-12 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_customuser_fechadenacimiento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='username',
            field=models.CharField(max_length=150, unique=True),
        ),
    ]