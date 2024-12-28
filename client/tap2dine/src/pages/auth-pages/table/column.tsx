import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../../../components/ui/button'
import { ArrowUpDown } from 'lucide-react'
import { Checkbox } from '../../../components/ui/checkbox'


type TableColumn = {
    id: string
    tableName: string
    qrCode: string
    createdAt: string
}

export const columns: ColumnDef<TableColumn>[] = [
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
    },
    {
        accessorKey: 'tableName',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Table Name <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
    },
    {
        accessorKey: 'qrCode',
        header: 'QR code',
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
    },
]