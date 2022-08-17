import FourProductsSlider from "../../../product/four-products-slider/FourProductsSlider";

export default function FeaturedProduct() {
    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Product</h1>
                </div>
                <FourProductsSlider />
            </div>
        </div>
    );
}