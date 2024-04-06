from django.shortcuts import render
from .models import ChessGame

def chessboard(request):
    return render(request, "chessboard/play.html")

def rook(request):
    return render(request, "chessboard/play.html")

def exercises(request):
    return render(request, "chessboard/play_exercises.html")

def exercises_2(request):
    return render(request, "chessboard/play_exercises.html")