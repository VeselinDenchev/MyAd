import ProductItem from "../../../product/product-item/ProductItem";

import Slider from 'react-slick';
import FourProductsSlider from "../../../product/four-products-slider/FourProductsSlider";

export default function RecentProduct() {
    const recentProductsImages = 
    [
        'img/product-6.jpg',
        'img/product-7.jpg',
        'img/product-8.jpg',
        'img/product-9.jpg',
        'img/product-10.jpg'
    ];

    return (
        <div className="recent-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Recent Product</h1>
                </div>
                <FourProductsSlider images={recentProductsImages} />
            </div>
        </div>
    );
}