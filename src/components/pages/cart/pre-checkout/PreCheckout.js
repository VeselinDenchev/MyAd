import CartSummary from "./cart-summary/CartSummary";
import Coupon from "./coupon/Coupon";

export default function PreCheckout() {
    return (
        <div className="col-lg-4">
            <div className="cart-page-inner">
                <div className="row">
                    <Coupon />
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}