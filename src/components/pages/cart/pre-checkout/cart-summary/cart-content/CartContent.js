import { useContext } from "react";

import { CartContext } from "../../../../../../contexts/CartContext";
import { CheckoutContext } from "../../../../../../contexts/CheckoutContext";

export default function CartContent({order}) {
    const { subTotal } = useContext(CartContext);

    const { shippingCost, grandTotal } = useContext(CheckoutContext);

    return (
            order 
            ?
            <div className="cart-content">
                <h1>Cart Summary</h1>
                <p>Sub Total<span>${order.subTotal}</span></p>
                {subTotal <= 1_000 && <p>Shipping Cost<span>${order.shippingCost}</span></p>}
                <h2>Grand Total<span>${order.grandTotal}</span></h2>
            </div>
            :
            <div className="cart-content">
                <h1>Cart Summary</h1>
                <p>Sub Total<span>${subTotal}</span></p>
                {subTotal <= 1_000 && <p>Shipping Cost<span>${shippingCost}</span></p>}
                <h2>Grand Total<span>${grandTotal}</span></h2>
            </div>
    );
}