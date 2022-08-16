import CategoryImage from "./header-slider-item/category-image/CategoryImage";
import HeaderSliderItem from "./header-slider-item/HeaderSliderItem";
import SidebarNav from "./sidebar-nav/SidebarNav";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
    const headerSliderImages = 
    [
        'img/slider-1.jpg',
        'img/slider-2.jpg',
        'img/slider-3.jpg',
    ];

    const categoryImages = 
    [
        'img/category-1.png',
        'img/category-2.jpg',
    ];

    const sliderSettings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <SidebarNav />
                    <div className="col-md-6">
                        <Slider className="header-slider normal-slider" {...sliderSettings}>
                            {headerSliderImages.map(imageSource =>
                                <HeaderSliderItem key={imageSource} image={imageSource} />
                            )}
                        </Slider>
                    </div>
                    <div className="col-md-3">
                        <div className="header-img">
                            {categoryImages.map(imageSource =>
                                <CategoryImage key={imageSource} image={imageSource} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}