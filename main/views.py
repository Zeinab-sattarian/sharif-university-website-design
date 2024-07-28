from django.shortcuts import render
from main.models import Facilities

def index(request):
    facilities = Facilities.objects.all()
    context = { 'facilities': facilities }
    return render(request, 'index.html', context)

def course(request):
    return render (request,'course.html')

def Contact(request):
    return render (request,'contact.html')

def blog(request):
    return render (request,'blog.html')

def about(request):
    return render (request,'about.html')