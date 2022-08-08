import Slider from "react-slick";
import ProductItem from "../product-item/ProductItem";

export default function FourProductsSlider({images}) {
    const sliderSettings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
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
        <Slider {...sliderSettings}>
        {images.map(image =>
            <ProductItem key={image} image={image} />
        )}
        </Slider>
    );
}