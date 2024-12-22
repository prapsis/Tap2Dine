import { useParams } from "react-router"
import PageHeader from "../../../../components/reusables/page-header"
import { Check, Plus } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../../../components/ui/card";
import { useState, useEffect } from "react";
import { Badge } from "../../../../components/ui/badge";

interface Addon {
  name: string
  price: number
}

interface Dish {
  id: string
  name: string
  price: number
  addons: Addon[]
}

interface Order {
  id: string
  table: string
  status: string
  dishes: Dish[]
}

// Mock function to fetch order data - replace with actual API call in production
const fetchOrderData = async (orderId = '1'): Promise<Order> => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    id: orderId,
    table: "Table 5",
    status: "Preparing",
    dishes: [
      {
        id: "1",
        name: "Margherita Pizza",
        price: 12.99,
        addons: [
          { name: "Extra Cheese", price: 1.50 },
          { name: "Mushrooms", price: 1.00 }
        ]
      },
      {
        id: "2",
        name: "Caesar Salad",
        price: 8.99,
        addons: [
          { name: "Grilled Chicken", price: 2.50 }
        ]
      }
    ]
  }
}

export default function SingleOrder() {
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const {id:orderId} = useParams();

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await fetchOrderData(orderId)
        setOrder(data)
      } catch (error) {
        console.error("Failed to fetch order data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [orderId])
  return (
    <>
    <PageHeader title={`Table 00 - Order ${orderId}`}/>
    <div>
        <div className="flex justify-between items-center">
          <p className="font-medium">Order Details</p>
          <div>
            <Button variant="secondary" className="text-white"><Plus /> Add New Dishes</Button>
          </div>
        </div>
        <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-lg">
        <span>Table: {order?.table}</span>
          <Badge variant={order?.status === 'Served' ? 'secondary' : 'default'}>
            {order?.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order?.dishes.map((dish) => (
            <div key={dish.id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold">{dish.name}</h3>
                <span>Rs. {dish.price.toFixed(2)}</span>
              </div>
              {dish.addons.length > 0 && (
                <div className="ml-4">
                  <h4 className="text-sm font-medium mb-1">Add-ons:</h4>
                  <ul className="list-disc list-inside">
                    {dish.addons.map((addon, index) => (
                      <li key={index} className="text-sm flex justify-between">
                        <span>{addon.name}</span>
                        <span>Rs. {addon.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
        <p className="text-lg font-semibold">Total: Rs. {order?.dishes.reduce((total, dish) => total + dish.price, 0).toFixed(2)}</p>
        <div className="flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700"><Check/>Mark as Served</Button>
          <Button>Checkout</Button>
        </div>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
