from django.db import models

class ChessGame(models.Model):
    name = models.CharField(max_length=100)
    fen = models.CharField(max_length=100, default='startpos')