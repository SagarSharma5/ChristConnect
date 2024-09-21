from django.urls import include, re_path
from django.urls import path
from app_backend import views


from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    # re_path('',views.server),
    path('viewAllPosts/', views.viewAllPostsAPI),
    path('post/', views.postAPI)
] 