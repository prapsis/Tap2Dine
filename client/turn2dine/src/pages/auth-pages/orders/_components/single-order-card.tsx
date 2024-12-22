import { Dot } from "lucide-react";

export type TSingleOrderCardProps = {
    onClick?: () => void
}
export default function SingleOrderCard({onClick}: TSingleOrderCardProps) {
    return (
        <div className="w-56 h-60 border rounded-md p-2 hover:scale-105 transition-all" onClick={() => {if(onClick) onClick(); }}>
            <p className="text-sm text-green-600 font-medium flex items-center justify-between">
                Table-1 Order <span>10:00 AM</span>
            </p>
            {/* Single order dish items */}
            <div className="overflow-hidden h-44 border-b border-bottom ">
                <ul>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <li key={i} className="flex justify-between text-xs font-light text-gray-600">
                            <p className="flex items-center justify-start"><Dot className="text-secondary" />dish 1</p>
                            <p>2</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Single order footer */}
            <div className="mt-1 flex justify-between items-center">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-sm">Rs 600</p>
            </div>
        </div>
    )
}
