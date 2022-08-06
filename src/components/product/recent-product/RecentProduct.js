import ProductItem from "../product-item/ProductItem";

import Slider from 'react-slick';

export default function RecentProduct() {
    const productImages = 
    [
        'img/product-6.jpg',
        'img/product-7.jpg',
        'img/product-8.jpg',
        'img/product-9.jpg',
        'img/product-10.jpg'
    ]

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
        <div className="recent-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Recent Product</h1>
                </div>
                <Slider {...featuredItemSliderSettings}>
                    {productImages.map(imageSource =>
                        <ProductItem image={imageSource} />
                    )}
                </Slider>
            </div>
        </div>
    );
}