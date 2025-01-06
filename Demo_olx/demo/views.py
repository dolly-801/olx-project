from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category,Brand, Product
from .serializers import CategorySerializer,BrandSerializer,ProductSerializer,ProductInfoSerializer, YearlyProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework import status
# from django.contrib.auth.models import User
# from rest_framework_simplejwt.tokens import RefreshToken

class ProductFilter(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title']

class PriceFilter(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['price']


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BrandListCreate(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['name', 'price']

class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductInfoAPIView(APIView):
    def get(self,request):
        products = Product.objects.all()
        serializer = ProductInfoSerializer({
            'products': products,
            'count' : len(products),
            # 'max_price' : products.aggregate(max_price=Max('price'))['max_price'],
        })
        return Response(serializer.data)
    

class YearlyListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = YearlyProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['year']

# class RegisterView(APIView):
#     permission_classes = [AllowAny]  # Allow anyone to register

#     def post(self, request):
#         try:
#             username = request.data.get('username')
#             email = request.data.get('email')
#             password = request.data.get('password')

#             if User.objects.filter(username=username).exists():
#                 return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

#             if User.objects.filter(email=email).exists():
#                 return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

#             user = User.objects.create_user(username=username, email=email, password=password)
#             return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

#         except Exception as e:
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Logout View
# class LogoutView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         try:
#             token = RefreshToken(request.data.get('refresh'))
#             token.blacklist()  # Blacklist the refresh token
#             return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)