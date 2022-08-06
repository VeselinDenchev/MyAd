import Slider from "react-slick";
import ReviewItem from "./review-item/ReviewItem";


export default function Review() {
    const reviewImages = 
    [
        "img/review-1.jpg",
        "img/review-2.jpg",
        "img/review-3.jpg",
    ];

    const reviewSliderSettings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="review">
            <div className="container-fluid">
                    <Slider {...reviewSliderSettings}>
                        <div className="row align-items-center review-slider normal-slider">
                        {reviewImages.map(imageSource =>
                            <ReviewItem key={imageSource} imageSource={imageSource} />
                        )}
                        </div>
                    </Slider>
            </div>
        </div>
    );
}