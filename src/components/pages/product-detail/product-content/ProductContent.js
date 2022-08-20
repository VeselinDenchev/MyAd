import { useEffect, useState, useContext } from "react";
import Rating from "../../../product/rating/Rating";
import AddToCart from "./add-to-cart/AddToCart";
import Color from "./color/Color";
import Price from "./price/Price";
import Quantity from "../../../product/quantity/Quantity";
import Size from "./size/Size";
import { CartContext } from "../../../../contexts/CartContext";

export default function ProductContent({product}) {
    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState('1');

    function addToCartClickHandler() {
        addToCart(product.id, parseInt(quantity));
    }

    return (
        <div className="col-md-7">
            <div className="product-content">
                <div className="title"><h2>{product.name}</h2></div>
                <Rating rating={product.rating} />
                <Price price={product.price} />
                <div className="quantity">
                    <h4>Quantity:</h4>
                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                </div>
                {/* <Size setSize={setProductVariant} />
                <Color setColor={setProductVariant} /> */}
                <AddToCart addToCartClickHandler={addToCartClickHandler} />
            </div>
        </div>
    );
}