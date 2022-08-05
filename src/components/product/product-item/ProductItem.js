import Rating from "../rating/Rating";
import ProductImage from "./product-image/ProductImage";
import ProductPrice from "./product-price/ProductPrice";

export default function ProductItem(props) {
    return (
        <div className="col-lg-3">
            <div className="product-item">
                <div className="product-title">
                    <a href="#">Product Name</a>
                    <Rating />
                </div>
                <ProductImage image={props.image} />
                <ProductPrice />
            </div>
        </div>
    );
}