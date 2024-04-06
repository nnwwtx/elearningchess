from django.urls import path
from . import views

app_name = 'chessboard'

urlpatterns = [
    path('', views.chessboard, name='chessboard'),
    path('rook', views.rook, name='rook'),
    path('exercises', views.exercises, name='exercises'),
    path('exercises-2', views.exercises, name='exercises-2'),
]