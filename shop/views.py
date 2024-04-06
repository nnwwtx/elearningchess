from django.shortcuts import render, get_object_or_404

from .models import Category, ProductProxy
from payment.models import OrderItem
from django.contrib.auth.decorators import login_required
from videoplayer.models import Video

def products_view(request):
    products = ProductProxy.objects.all()
    return render(request, 'shop/products.html', {'products': products})

def products_detail_view(request, slug):
    product = get_object_or_404(ProductProxy, slug=slug)
    return render(request, 'shop/product_detail.html', {'product': product})

def course_detail_view(request, slug):
    # Получаем объект курса по его slug
    course = get_object_or_404(ProductProxy, slug=slug)

    # Получаем список видео для данного курса
    videos = Video.objects.filter(course=course)

    # Отображаем шаблон с передачей объекта курса и списка видео в контексте
    return render(request, 'shop/course_detail.html', {'course': course, 'videos': videos})

def category_list(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = ProductProxy.objects.select_related('category').filter(category=category)
    context = {'category': category, 'products': products}
    return render(request, 'shop/category_list.html', context)

def course_videos(request, slug):  # Представление для отображения списка видео курса
    course = get_object_or_404(ProductProxy, slug=slug)
    videos = Video.objects.filter(course=course)  # Получаем список видео для данного курса
    return render(request, 'shop/course_videos.html', {'videos': videos})

def display_courses(request):
    return render(request, 'videoplayer/video_list.html')

def video_list_view(request):
    # Получаем список видео из базы данных или откуда-то еще
    videos = Video.objects.all()  # Пример, как можно получить список видео из модели Video

    # Отображаем шаблон с передачей списка видео в контексте
    return render(request, 'shop/video_play.html', {'videos': videos})

@login_required
def my_courses(request):
    # Получаем заказы текущего пользователя
    user_orders = OrderItem.objects.filter(user=request.user)
    # Извлекаем курсы из заказов
    courses = [order_item.product for order_item in user_orders]
    return render(request, 'shop/my_courses.html', {'courses': courses})

# def course_videos_view(request, product_slug):
#     # Получаем продукт (курс) по его slug
#     product = get_object_or_404(ProductProxy, slug=product_slug)
#     # Получаем список видео, связанных с этим продуктом (курсом)
#     videos = Video.objects.filter(course=product)
#     return render(request, 'shop/course_videos.html', {'product': product, 'videos': videos})

def course_videos_view(request, slug):
    # Получаем объект продукта по его slug
    product = get_object_or_404(ProductProxy, slug=slug)
    
    # Проверяем, является ли продукт курсом
    if hasattr(product, 'is_course') and product.is_course:
        # Получаем заказы текущего пользователя, связанные с этим курсом
        user_orders = OrderItem.objects.filter(user=request.user, product=product)
        if user_orders.exists():
            # Если пользователь купил этот курс, получаем список видео курса
            videos = Video.objects.filter(course=product)
            return render(request, 'shop/course_videos.html', {'videos': videos, 'product': product})
        else:
            # Если пользователь не купил этот курс, перенаправляем его на страницу с деталями продукта
            return render(request, 'shop/product_detail.html', {'product': product})
    else:
        # Если продукт не является курсом, перенаправляем пользователя на страницу с деталями продукта
        return render(request, 'shop/product_detail.html', {'product': product})