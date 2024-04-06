from django.shortcuts import render, get_object_or_404
from .models import Video

def display_video(request):
    videos = Video.objects.all()
    return render(request, 'videoplayer/video_list.html', {'videos': videos})