import Rating from "../rating/Rating";
import ProductImage from "./product-image/ProductImage";
import ProductPrice from "./product-price/ProductPrice";

export default function ProductItem({image}) {
    return (
        <div className="product-item">
            <div className="product-title">
                <a href="#">Product Name</a>
                <Rating />
            </div>
            <ProductImage image={image} />
            <ProductPrice />
        </div>
    );
}