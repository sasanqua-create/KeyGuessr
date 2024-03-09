from django.contrib import admin
from django.urls import path, include
from backend.urls import urlpatterns as word_router
from ranking.urls import router as ranking_router



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(word_router)),
    path('api/ranking', include(ranking_router.urls)),
]
