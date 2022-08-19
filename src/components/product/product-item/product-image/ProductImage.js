import ProductAction from "./product-action/ProductAction";

export default function ProductImage({image}) {
    return (
        <div className="product-image">
            <img src={image.url} alt="Product Image" />
            {/* <ProductAction /> */}
        </div>
    );
}