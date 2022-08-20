import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import Quantity from "../../quantity/Quantity";
import Image from "./image/Image";

export default function TableRow({product, quantity}) {
    const location = useLocation();

    const { cart, setCart, addToCart, removeFromCart } = useContext(CartContext);

    const [newQuantity, setNewQuantity] = useState(quantity.toString());

    const removeClickHandler = () => removeFromCart(product.id);

    useEffect(() => {
        const newQuantityInt = parseInt(newQuantity);

        if (newQuantity > quantity) {
            console.log('increment');
            addToCart(product.id, (newQuantityInt - quantity));
        }
        else {
            console.log('decrement');
            setCart([...cart.filter(ci => ci.productId !== product.id), {productId: product.id, quantity: newQuantityInt}])
        }
    }, [newQuantity])

    return (
        <>
            <td>
                <Image product={product} />
            </td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                {
                    location.pathname === '/cart' 
                    ? <Quantity quantity={newQuantity} setQuantity={setNewQuantity} />
                    : quantity
                }

            </td>
            <td>${(product.price * parseInt(newQuantity)).toFixed(2)}</td>
            {location.pathname === '/cart' && <td><button onClick={removeClickHandler}><i className="fa fa-trash"></i></button></td>}
        </>
    );
}