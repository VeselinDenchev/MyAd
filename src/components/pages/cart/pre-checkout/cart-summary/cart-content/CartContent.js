import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

export default function CartContent() {
    const { subTotal } = useContext(CartContext);
    const [shippingCost, setShippingCost] = useState(5);
    const [grandTotal, setGrandTotal] = useState(subTotal);

    useEffect(() => {
        if (subTotal > 1_000) {
            setShippingCost(0);
        }
        else {
            setShippingCost(5);
        }
    }, [subTotal]);

    useEffect(() => {
        if (subTotal > 0) {
            setGrandTotal((Math.round((subTotal + shippingCost) * 100) / 100).toFixed(2)); 
        }
    }, [subTotal, shippingCost])

    return (
        <div className="cart-content">
            <h1>Cart Summary</h1>
            <p>Sub Total<span>${subTotal}</span></p>
            {subTotal <= 1_000 && <p>Shipping Cost<span>${shippingCost}</span></p>}
            <h2>Grand Total<span>${grandTotal}</span></h2>
        </div>
    );
}