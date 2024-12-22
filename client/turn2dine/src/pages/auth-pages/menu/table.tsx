import { DataTable } from '../../../components/reusables/data-table'
import { columns } from './column'

export default function MenuTable() {
  return (
    <div>
        <DataTable 
        columns={columns}
        data={[]}/>
    </div>
  )
}
