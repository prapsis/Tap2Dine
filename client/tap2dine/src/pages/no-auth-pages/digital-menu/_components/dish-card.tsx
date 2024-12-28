import { Button } from "../../../../components/ui/button";
import { FOOD_PLACEHOLDER } from "../../../../constants/images";

export default function DishCard() {
    return (
        <div className="bg-background border rounded-md p-2">
            <div className="w-20 h-20 rounded-full border-2 border-secondary overflow-hidden">
                <img src={FOOD_PLACEHOLDER} alt="food-item" />
            </div>
            <div>
                <p className="font-medium">Virgin Mojito</p>
                <p className="font-light">Rs. 100</p>
            </div>
            <Button variant="destructive" className="w-full mt-2">Add</Button>
        </div>
    )
}
