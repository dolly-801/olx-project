from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    image = models.ImageField(upload_to='product_images/',blank=True,null=True)

    def __str__(self):
        return self.title
    

class YearlyProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    year = models.IntegerField()

    def __str__(self):
        return self.product.title


