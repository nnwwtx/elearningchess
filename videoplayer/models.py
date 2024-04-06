from django.db import models
from django.urls import reverse
from shop.models import Product  # Import the Course model from your app

class Video(models.Model):
    """
    A model representing a video lesson in a course.
    """
    course = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='videos')
    title = models.CharField("Название", max_length=250)
    description = models.TextField("Описание", blank=True)
    video_url = models.CharField("URL видео", max_length=250)

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("videoplayer:video-detail", args=[str(self.id)])