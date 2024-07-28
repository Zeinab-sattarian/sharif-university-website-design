
from django.urls import path
from main.views import index, course, Contact, blog, about

app_name="main"

urlpatterns = [
    path('', index, name="index"),
    path('course', course, name="course"),
    path('Contact', Contact, name="Contact"),
    path('blog', blog, name="blog"),
    path('about', about, name="about"),
    
]
