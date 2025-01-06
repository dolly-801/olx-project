# import django_filters
# from .models import Product
# # from rest_framework import filters

# # class InStockFilterBackend(filters.BaseFilterBackend):
# #     def filter_queryset(self, request, queryset, view):
# #         return queryset.filter(stock__gt = 10)

# class ProductFilter(django_filters.FilterSet):
#     class Meta:
#         model = Product
#         fields = {
#             'price' : ['exact', 'range', 'lt', 'gt'],
#             'name' : ['exact', 'contains']
#         }