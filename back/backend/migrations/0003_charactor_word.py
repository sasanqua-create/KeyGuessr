# Generated by Django 3.2.25 on 2024-03-10 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20240309_2022'),
    ]

    operations = [
        migrations.AddField(
            model_name='charactor',
            name='word',
            field=models.JSONField(default=list),
        ),
    ]