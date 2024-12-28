import PageHeader from "../../../components/reusables/page-header";
import InventoryTable from "./table";


export default function InventoryPage() {
  return (
    <>
      <PageHeader title="Inventory" />
      <InventoryTable />
    </>
  )
}
