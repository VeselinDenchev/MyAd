import { Link } from "react-router-dom";

import Rating from "../rating/Rating";
import ProductImage from "./product-image/ProductImage";
import ProductPrice from "./product-price/ProductPrice";

export default function ProductItem({product}) {
    return (
            <div className="product-item">
                <Link to={`/product/${product.id}`}>
                    <div className="product-title">
                        <p href={`/product/${product.id}`}>{product.name}</p>
                        <Rating rating={product.rating} />
                    </div>
                    <ProductImage image={product.images[0]} />
                </Link>
                <ProductPrice id={product.id} price={product.price} />
            </div>
    );
}