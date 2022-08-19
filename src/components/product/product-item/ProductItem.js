import { Link } from "react-router-dom";

import Rating from "../rating/Rating";
import ProductImage from "./product-image/ProductImage";
import ProductPrice from "./product-price/ProductPrice";

export default function ProductItem({product}) {
    return (
        <div className="product-item">
            <div className="product-title">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
                <Rating rating={product.rating} />
            </div>
            <ProductImage image={product.images[0]} />
            <ProductPrice price={product.price} />
        </div>
    );
}