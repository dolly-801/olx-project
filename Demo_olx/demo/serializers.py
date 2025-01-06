from rest_framework import serializers
from .models import Category, Brand, Product, YearlyProduct

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    image = serializers.ImageField(max_length=None, use_url=True)


    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'category', 'brand', 'user', 'image']


class YearlyProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = YearlyProduct
        fields = ['id', 'product', 'year']


class  ProductInfoSerializer(serializers.Serializer):
    products = ProductSerializer(many = True)
    count = serializers.IntegerField()
