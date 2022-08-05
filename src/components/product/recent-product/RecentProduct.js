import ProductItem from "../product-item/ProductItem";

export default function RecentProduct() {
    const productImages = 
    [
        'img/product-6.jpg',
        'img/product-7.jpg',
        'img/product-8.jpg',
        'img/product-9.jpg',
        'img/product-10.jpg'
    ]

    return (
        <div className="recent-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Recent Product</h1>
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