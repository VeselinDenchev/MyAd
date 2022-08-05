import CategoryImage from "./header-slider-item/category-image/CategoryImage";
import HeaderSliderItem from "./header-slider-item/HeaderSliderItem";
import SidebarNav from "./sidebar-nav/SidebarNav";

export default function MainSlider() {
    const headerSliderImages = 
    [
        'img/slider-1.jpg',
        'img/slider-2.jpg',
        'img/slider-3.jpg',
    ];

    const categoryImages = 
    [
        'img/category-1.jpg',
        'img/category-2.jpg',
    ]

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <SidebarNav />
                    <div className="col-md-6">
                        <div className="header-slider normal-slider">
                            {headerSliderImages.map(imageSource =>
                                <HeaderSliderItem key={imageSource} image={imageSource} />
                            )}
                        </div>
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