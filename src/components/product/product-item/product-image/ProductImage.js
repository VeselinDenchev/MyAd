import ProductAction from "./product-action/ProductAction";

export default function ProductImage(props) {
    return (
        <div className="product-image">
            <a href="product-detail.html">
                <img src={props.image} alt="Product Image" />
            </a>
            <ProductAction />
        </div>
    );
}