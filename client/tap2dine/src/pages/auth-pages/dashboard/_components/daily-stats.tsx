import { DollarSign, ShoppingBag, Users } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card'

const data = [
    { name: 'Mon', revenue: 900 },
    { name: 'Tue', revenue: 1200 },
    { name: 'Wed', revenue: 1100 },
    { name: 'Thu', revenue: 1300 },
    { name: 'Fri', revenue: 1500 },
    { name: 'Sat', revenue: 1700 },
    { name: 'Sun', revenue: 1400 },
]

export function DailyStats() {
    return (
        <Card className="col-span-4">
            <CardHeader className='py-4'>
                <CardTitle className='text-lg'>Daily Statistics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-green-500/10 rounded-md p-1'>
                                <DollarSign className="w-4 h-4 text-green-500"/>
                            </div>
                            <p className="text-sm font-medium text-gray-500">Revenue</p>
                        </div>
                        <div className='flex items-center'>
                            <p className="text-md font-medium">Rs. 1,245</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-red-500/10 rounded-md p-1'>
                                <Users className="w-4 h-4 text-red-500"/>
                            </div>
                            <p className="text-sm font-medium text-gray-500">Customers</p>
                        </div>
                        <div className='flex items-center'>
                            <p className="text-md font-medium">21</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-blue-500/10 rounded-md p-1'>
                                <ShoppingBag className="w-4 h-4 text-blue-500"/>
                            </div>
                            <p className="text-sm font-medium text-gray-500">Orders</p>
                        </div>
                        <div className='flex items-center'>
                            <p className="text-md font-medium">24</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis  fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                            <Bar dataKey="revenue" fill='#3b82f6' radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

