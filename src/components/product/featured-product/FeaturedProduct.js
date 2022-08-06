import Slider from "react-slick";
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

    const featuredItemSliderSettings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Product</h1>
                </div>
                <Slider {...featuredItemSliderSettings}>
                        {productImages.map(imageSource =>
                            <ProductItem key={imageSource} image={imageSource} />
                        )}
                </Slider>
            </div>
        </div>
    );
}