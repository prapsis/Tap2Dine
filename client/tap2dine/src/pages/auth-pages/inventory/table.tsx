import { Plus } from 'lucide-react'
import { DataTable } from '../../../components/reusables/data-table'
import { Button } from '../../../components/ui/button'
import { columns } from './column'

export default function InventoryTable() {
  return (
    <div>
      <DataTable
        columns={columns}
        data={[]}
        functions={{
          search:{
            name: "name",
            placeholder: "Search by name..."
          },
          add: {
            node:(
              <Button><Plus />Add Ingredients</Button>
            )
          }
        }}
      />
    </div>
  )
}
