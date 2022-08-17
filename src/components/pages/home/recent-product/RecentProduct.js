import ProductItem from "../../../product/product-item/ProductItem";

import Slider from 'react-slick';
import FourProductsSlider from "../../../product/four-products-slider/FourProductsSlider";

export default function RecentProduct() {
    return (
        <div className="recent-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Recent Product</h1>
                </div>
                <FourProductsSlider />
            </div>
        </div>
    );
}