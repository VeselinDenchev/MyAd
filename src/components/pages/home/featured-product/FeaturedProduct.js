import FourProductsSlider from "../../../product/four-products-slider/FourProductsSlider";

export default function FeaturedProduct() {
    const featuredProductImages =
    [
        'img/product-1.jpg',
        'img/product-2.jpg',
        'img/product-3.jpg',
        'img/product-4.jpg',
        'img/product-5.jpg',
    ];

    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Product</h1>
                </div>
                <FourProductsSlider images={featuredProductImages} />
            </div>
        </div>
    );
}