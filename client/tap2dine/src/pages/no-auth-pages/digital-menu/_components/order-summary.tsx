import { FOOD_PLACEHOLDER } from "../../../../constants/images";

export default function OrderSummary() {
    return (
        <div>
            <div className="bg-background border rounded-md p-2 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-secondary overflow-hidden">
                    <img src={FOOD_PLACEHOLDER} alt="food-item" />
                </div>
                <div>
                    <p className="font-medium">Virgin Mojito</p>
                    <p className="font-light">Rs. 100</p>
                    <p className="font-medium">Total: 2</p>
                </div>
            </div>
        </div>
    )
}
