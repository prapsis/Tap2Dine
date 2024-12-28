from django.urls import path,include
from .views import TestAuthView
from .views import UserRegistrationView,TableViewSet, DishViewSet, IngredientViewSet, AddOnViewSet,OrderViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'dishes', DishViewSet, basename='dish')
router.register(r'ingredients', IngredientViewSet, basename='ingredient')
router.register(r'add-ons', AddOnViewSet, basename='addon')
router.register(r'tables',TableViewSet,basename='table')
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns = [
    path('test-auth/', TestAuthView.as_view(), name='test_auth'),
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('',include(router.urls)),
]
