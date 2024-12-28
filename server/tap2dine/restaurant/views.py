from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import UserRegistrationSerializer
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import Table, Dish, Ingredient, AddOn,Order
from .serializers import TableSerializer,DishWriteSerializer,DishSerializer, IngredientSerializer, AddOnSerializer,OrderSerializer
import qrcode
from io import BytesIO
from django.core.files import File
from rest_framework.decorators import action

# Create your views here.

class TestAuthView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request):
        return Response({'message':"You are authenticated", 'user':str(request.user)})

class UserRegistrationView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserRegistrationSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"User Registered Successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TableViewSet(ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        table = serializer.save()

        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr_data = f"http:localhost:8000/digi-menu/{table.name}"
        qr.add_data(qr_data)
        qr.make(fit=True)

        qr_image = qr.make_image(fill='black',back_color='white')
        buffer = BytesIO()
        qr_image.save(buffer)
        buffer.seek(0)

        table.qr_code.save(f"{table.name}_qr.png",File(buffer), save=True)

        headers = self.get_success_headers(serializer.data)
        return Response({"message":"Table created successfully."}, status=status.HTTP_201_CREATED, headers=headers)
    

class DishViewSet(ModelViewSet):
    queryset = Dish.objects.all()
    
    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return DishWriteSerializer
        return DishSerializer

class IngredientViewSet(ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class AddOnViewSet(ModelViewSet):
    queryset = AddOn.objects.all()
    serializer_class = AddOnSerializer

class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        try:
            order = self.get_object()
            new_status = request.data.get('status')
            if new_status not in ['Pending','Preparing','Completed']:
                return Response({'error':'Invalid Status'},status=status.HTTP_400_BAD_REQUEST)
            order.status = new_status
            order.save()
            return Response({"message":"Order status updated successfully","status":order.status})
        except Exception as e:
            return Response({"error":str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)