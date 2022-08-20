import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import Quantity from "../../quantity/Quantity";
import Image from "./image/Image";

export default function TableRow({product, quantity}) {
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
                <Image image={product.images[0].url} />
            </td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <Quantity quantity={newQuantity} setQuantity={setNewQuantity} />
            </td>
            <td>${(product.price * parseInt(newQuantity)).toFixed(2)}</td>
            <td><button onClick={removeClickHandler}><i className="fa fa-trash"></i></button></td>
        </>
    );
}