import ProductItem from "../../../../product/product-item/ProductItem";

export default function SidebarWidgetSlider() {
    const productImages = 
    [
        'img/product-10.jpg',
        'img/product-9.jpg',
        'img/product-8.jpg',
    ];

    return (
        <div className="sidebar-widget widget-slider">
        <div className="sidebar-slider normal-slider">
            {productImages.map(image =>
                <ProductItem key={image} image={image} />
            )}
        </div>
    </div>
    );
}