import { useLocation } from "react-router-dom";
import CartButtons from "./cart-buttons/CartButtons";
import CartContent from "./cart-content/CartContent";

export default function CartSummary() {
    const location = useLocation();

    return (
        <div className="col-md-12">
            <div className="cart-summary">
                <CartContent />
                {location.pathname === '/cart' && <CartButtons />}
            </div>
        </div>
    );
}