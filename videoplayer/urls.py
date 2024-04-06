from django.urls import path
from . import views

app_name = 'videoplayer'

urlpatterns = [
    path('videos/', views.display_video, name='display_video'),
]