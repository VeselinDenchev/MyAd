import CartButtons from "./cart-buttons/CartButtons";
import CartContent from "./cart-content/CartContent";

export default function CartSummary() {
    return (
        <div className="col-md-12">
            <div className="cart-summary">
                <CartContent />
                <CartButtons />
            </div>
        </div>
    );
}