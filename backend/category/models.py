from django.db import models
from django.conf import settings


class Category(models.Model):

    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True, max_length=1000)
    icon = models.URLField(
        null=True,
        blank=True,
    )

    def __str__(self) -> str:
        return self.name
