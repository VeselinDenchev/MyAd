import { useEffect, useState } from "react";
import Rating from "../../../product/rating/Rating";
import Action from "./action/Action";
import Color from "./color/Color";
import Price from "./price/Price";
import Quantity from "../../../product/quantity/Quantity";
import Size from "./size/Size";

export default function ProductContent() {
    const [productVariant, setProductVariant] = useState({
        size: '',
        color: ''
    });

    useEffect(() => {
        console.log(productVariant);
    }, [productVariant.size, productVariant.color]);

    return (
        <div className="col-md-7">
            <div className="product-content">
                <div className="title"><h2>Product Name</h2></div>
                <Rating />
                <Price />
                <div className="quantity">
                    <h4>Quantity:</h4>
                    <Quantity />
                </div>
                <Size setSize={setProductVariant} />
                <Color setColor={setProductVariant} />
                <Action />
            </div>
        </div>
    );
}