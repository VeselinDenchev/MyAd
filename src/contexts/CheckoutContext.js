import { useState, useContext, useEffect, createContext } from "react";
import { CartContext } from "./CartContext";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({
    children,
}) => {
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
        <CheckoutContext.Provider value={{
            shippingCost,
            grandTotal
        }}>
            {children}
        </CheckoutContext.Provider>  
    );
};