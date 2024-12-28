import { Plus } from 'lucide-react'
import { DataTable } from '../../../components/reusables/data-table'
import { Button } from '../../../components/ui/button'
import { columns } from './column'
import { toast } from 'sonner'

export default function MenuTable() {
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
              <Button onClick={() => toast("Waiter called.")}><Plus />Add Dishes</Button>
            )
          }
        }}
      />
    </div>
  )
}
