import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import * as userService from '../services/userService'
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({
    children,
}) => {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [subTotal, setSubTotal] = useState(0);

    const { products } = useContext(ProductContext);

    useEffect(() => {
        if (products.length > 0) {
            setCart([...cart.sort((a, b) => {
                    const productA = getProductById(a.productId);
                    const productB = getProductById(b.productId);

                    return productA.name.localeCompare(productB.name);
                }
            )]);
        }
    }, [subTotal])

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            let cost = 0;

            cart.forEach(cartItem => {
                const price = [...products.filter(p => p.id === cartItem.productId)][0].price;
                const totalPrice = price * cartItem.quantity;
    
                cost += totalPrice;
            });
    
            setSubTotal(cost);
        }
    }, [cart])

    function addToCart(productId, quantity) {
        const exists = cart.some(ci => ci.productId === productId);

        if (exists) {
            let cartItem = [...cart.filter(ci => ci.productId === productId)][0];
            cartItem.quantity += quantity;

            setCart([...cart.filter(ci => ci.productId !== productId), cartItem]);
        }
        else {
            setCart([...cart.filter(ci => ci.productId !== productId), {productId: productId, quantity: quantity}]);
        }
    }

    const removeFromCart = (productId) => {console.log(productId); setCart(cart.filter(ci => ci.productId !== productId));} 

    function changeProductQuantity(productId, quantity) {
        if (quantity === 0) {
            removeFromCart(productId);
            
            return;
        }

        setCart([...cart, {productId, quantity}]);
    }

    const clearCart = () => setCart([]);

    const getProductById = (productId) => [...products.filter(p => p.id === productId)][0];

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            subTotal,
            addToCart,
            removeFromCart,
            changeProductQuantity,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>  
    );
};