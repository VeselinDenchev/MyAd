import Slider from "react-slick";
import BrandItem from "./brand-item/BrandItem";

export default function Brand() {
    const brandImages = 
    [
        'img/brand-1.png',
        'img/brand-2.png',
        'img/brand-3.png',
        'img/brand-4.png',
        'img/brand-5.png',
        'img/brand-6.png',
    ];

    const brandSliderSettings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className="brand">
            <div className="container-fluid">
                <Slider {...brandSliderSettings}>
                {brandImages.map(imageSource =>
                    <BrandItem key={imageSource} image={imageSource} />
                )}
                </Slider>
            </div>
        </div>
    );
}