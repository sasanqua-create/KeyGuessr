from django.contrib import admin
from django.urls import path, include
from backend import urls
from ranking.urls import router as ranking_router



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(urls)),
    path('api/ranking', include(ranking_router.urls)),
]
