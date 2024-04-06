from django.urls import path
from .views import products_detail_view, products_view, category_list, my_courses, course_videos_view, course_videos, video_list_view



app_name = 'shop'

urlpatterns = [
    path('', products_view, name='products'),
    path('my-courses/', my_courses, name='my-courses'),
    path('videos/', video_list_view, name='video_list'),
    path('course-videos/<slug:slug>/', course_videos, name='course-videos'), 
    path('<slug:slug>/', products_detail_view, name='product-detail'),
    path('search/<slug:slug>/', category_list, name='category-list'),
]