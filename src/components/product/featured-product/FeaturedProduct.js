import ProductItem from "../product-item/ProductItem";

export default function FeaturedProduct() {
    const productImages =
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
                <div className="row align-items-center product-slider product-slider-4">
                    {productImages.map(imageSource =>
                        <ProductItem key={imageSource} image={imageSource} />
                    )}
                </div>
            </div>
        </div>
    );
}