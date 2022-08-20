import { useContext } from "react";

import { CartContext } from "../../../../contexts/CartContext";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";

export default function CheckoutSummary() {
    const { subTotal } = useContext(CartContext);
    const { shippingCost, grandTotal } = useContext(CheckoutContext);

    return (
        <div className="checkout-summary">
            <h1>Cart Total</h1>
            <p className="sub-total">Sub Total<span>${subTotal}</span></p>
            <p className="ship-cost">Shipping Cost<span>${shippingCost}</span></p>
            <h2>Grand Total<span>${grandTotal}</span></h2>
        </div>
    );
}