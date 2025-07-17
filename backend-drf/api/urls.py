from django.urls import path, include
from accounts import views as UserView




urlpatterns = [
    path('register/', UserView.RegisterView.as_view()),
]
