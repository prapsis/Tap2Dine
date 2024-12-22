import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../../../components/ui/button'
import { ArrowUpDown } from 'lucide-react'
import { Checkbox } from '../../../components/ui/checkbox'


type MenuColumn = {
    id: string
    name: string
    price: number
    category: string
    description: string
}

export const columns: ColumnDef<MenuColumn>[] = [
    {
        id: "select",
        accessorKey: "id",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Name <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
    },
    {
        accessorKey: 'price',
        header: 'Price',
    },
    {
        accessorKey: 'category',
        header: 'Category',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    }
]