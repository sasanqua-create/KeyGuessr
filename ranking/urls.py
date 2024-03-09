from django.urls import path, include
from rest_framework import routers
from ranking.views import RankingAPIView, UserlistAPIview

router = routers.DefaultRouter()
router.register(r'ranking', RankingAPIView)
router.register(r'user-list', UserlistAPIview)

urlpatterns = [
    path('', include(router.urls)),
]


#urlpatterns = [
#    path('ranking/', RankingAPIView.as_view(), name='ranking-list'),
#]