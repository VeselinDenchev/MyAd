import Slider from "react-slick";
import ProductItem from "../../../product/product-item/ProductItem";

export default function SidebarWidgetSlider() {
    const productImages = 
    [
        'img/product-10.jpg',
        'img/product-9.jpg',
        'img/product-8.jpg',
    ];

    const sidebarSliderSettings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="sidebar-widget widget-slider">
            <Slider {...sidebarSliderSettings} className="sidebar-slider normal-slider">
                    {productImages.map(image =>
                        <ProductItem key={image} image={image} />
                    )}
            </Slider>
        </div>

    );
}