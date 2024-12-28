import PageHeader from "../../../components/reusables/page-header";
import { DailyStats } from "./_components/daily-stats";
import { MenuManagement } from "./_components/menu-management";
import { OrdersOverview } from "./_components/orders-overview";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" />
      <div>
        <div className="flex gap-4">
          <DailyStats />
          <OrdersOverview />
        </div>
        <div className="mt-4">
          <MenuManagement />
        </div>
      </div>
    </div>
  )
}
