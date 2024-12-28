
import { Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card'
import { Button } from '../../../../components/ui/button'

export function MenuManagement() {
  // Mock data
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, category: 'Pizza' },
    { id: 2, name: 'Caesar Salad', price: 8.99, category: 'Salad' },
    { id: 3, name: 'Cheeseburger', price: 10.99, category: 'Burger' },
  ]

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className='text-lg'>Menu Management</CardTitle>
        <Button size="sm" className='text-sm'>
          <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

