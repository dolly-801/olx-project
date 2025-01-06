from django.urls import path
from . import views



urlpatterns = [
    path('category/',views.CategoryListCreate.as_view()),
    path('brand/',views.BrandListCreate.as_view()),
    path('product/',views.ProductListCreateAPIView.as_view()),
    path('product/<int:pk>/', views.ProductRetrieveUpdateDestroy.as_view()),
    # path('yearly/',views.YearlyListAPIView.as_view()),
    path('filter/', views.ProductFilter.as_view(), name='product_filter'),
    path('price/', views.PriceFilter.as_view(), name='product_price'),
]  
