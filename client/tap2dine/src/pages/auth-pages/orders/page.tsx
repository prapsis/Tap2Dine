import { Plus } from "lucide-react";
import PageHeader from "../../../components/reusables/page-header";
import { Button } from "../../../components/ui/button";
import SingleOrderCard from "./_components/single-order-card";
import { useNavigate } from "react-router";

export default function Orders() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="Orders" />
      <div>
        <div className="flex justify-between">
          <p className="font-medium">Current Orders</p>
          <div>
            <Button><Plus /> Add New Order</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 10 }).map((_,i) => (
              <SingleOrderCard onClick={() => {navigate(`${i}`)}}/>
          ))}
        </div>
      </div>
    </>
  )
}
