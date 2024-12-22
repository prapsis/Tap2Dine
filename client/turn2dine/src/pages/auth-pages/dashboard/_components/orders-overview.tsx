
import { Badge } from "../../../../components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "../../../../components/ui/card"

export function OrdersOverview() {

  const orders = [
    { id: 1, table: 'Table 3', items: ['Pasta', 'Salad'], status: 'Preparing' },
    { id: 2, table: 'Table 7', items: ['Burger', 'Fries'], status: 'Ready' },
    { id: 3, table: 'Table 2', items: ['Pizza', 'Coke'], status: 'Served' },
  ]

  return (
    <Card className="col-span-4">
     <CardHeader className='py-4'>
        <CardTitle className='text-lg'>Orders overview</CardTitle>
    </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div>
                <p className="font-semibold">{order.table}</p>
                <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
              </div>
              <Badge variant={order.status === 'Served' ? 'secondary' : 'default'}>
                {order.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

