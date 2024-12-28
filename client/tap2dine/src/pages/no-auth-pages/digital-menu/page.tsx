import { PhoneCall, Soup } from "lucide-react";
import { Button } from "../../../components/ui/button";
import DishCard from "./_components/dish-card";
import { toast, Toaster } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet"
import OrderSummary from "./_components/order-summary";
import { Fragment } from "react/jsx-runtime";
import { DIGITAL_MENU_LOGO } from "../../../constants/images";

export default function DigitalMenu() {
  return (
    <div className=" w-full min-h-screen gap-2 p-2">
      <Toaster />
      {/* logo section */}
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="size-20 object-contain">
          <img src={DIGITAL_MENU_LOGO} alt="LOGO" />
        </div>
        <p className="text-lg text-stone-950 font-medium pt-2">Motomania Cafe & Workshop</p>
      </div>

      <div className="sticky top-0 bg-background">
        {/* button section */}
        <div className="py-4 flex items-center justify-center gap-4 mt-4 ">
          <Button variant="secondary" className="text-white" onClick={() => toast("Waiter called.",{
            position: "top-right",
            duration: 3000,
            description: "Please wait. A waiter will be at your service soon."
          })}><PhoneCall />Call Waiter</Button>
          <Sheet>
            <SheetTrigger><Button variant="outline"><Soup />My Orders</Button></SheetTrigger>
            <SheetContent className="overflow-y-scroll">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-left">My orders</SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <Fragment key={i}>
                    <OrderSummary />
                  </Fragment>
                ))}
              </div>
              <div className="fixed bottom-0 py-4 bg-background w-[62%]">
                <p className="pb-2 mb-2 font-semibold border-b-2 border-border">Total Price: Rs 2000</p>

                <Button className="w-full">Place order</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* dish type section */}
        <div className=" mt-4 flex items-center justify-evenly overflow-y-scroll gap-2 ">
          {
            Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="px-2 py-[2px] bg-black text-white rounded-md">
                <p className="text-nowrap text-base">Dish type {i + 1}</p>
              </div>
            ))
          }
        </div>
        <p className="text-xl font-semibold mt-4">Dish Type 1</p>

      </div>
      {/* dishes section */}
      <div className="mt-4">
        <div className="grid grid-cols-2 mt-4 gap-2 pb-4">
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
        </div>
      </div>
    </div>
  )
}
