from django.urls import path
from .views import ChatAPIView,FineTunedQA

urlpatterns = [
    path("chat/",ChatAPIView,name='chat'),
    path("fine-tuned-chat/",FineTunedQA,name='fine-tuned-chat')
]