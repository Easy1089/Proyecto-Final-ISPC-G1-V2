from django.urls import path, include
from .views import CustomUserCreateAPIView, LoginView, LogoutView

urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),

    path('auth/signup/', CustomUserCreateAPIView.as_view(), name='auth_signup'),

    path('auth/reset/',
         include('django_rest_passwordreset.urls',
                 namespace='password_reset')),
]
