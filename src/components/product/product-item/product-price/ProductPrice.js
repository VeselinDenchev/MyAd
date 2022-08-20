import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export default function ProductPrice({id, price}) {
    const { addToCart } = useContext(CartContext);

    function addToCartClickHandler() {
        addToCart(id, 1);
    }

    return (
        <div className="product-price">
            <h3><span>$</span>{price}</h3>
            <button className="btn" onClick={addToCartClickHandler}><i className="fa fa-shopping-cart"></i>Add to cart</button>
        </div>
    );
}