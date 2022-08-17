import ProductAction from "./product-action/ProductAction";

export default function ProductImage({image}) {
    return (
        <div className="product-image">
            <a href="product-detail.html">
                <img src={image.url} alt="Product Image" />
            </a>
            {/* <ProductAction /> */}
        </div>
    );
}