import Slider from "react-slick";
import Brand from "../../brand/Brand";
import ProductItem from "../../product/product-item/ProductItem";
import Sidebar from "../../sidebar/Sidebar";
import ProductContent from "./product-content/ProductContent";
import ProductDetailBottom from "./product-detail-bottom/ProductDetailBottom";
import SliderNavImage from "./slider-nav-image/SliderNavImage";

export default function ProductDetail() {
    const imagePaths = 
    [
        'img/product-1.jpg',
        'img/product-3.jpg',
        'img/product-5.jpg',
        'img/product-7.jpg',
        'img/product-9.jpg',
        'img/product-10.jpg'
    ];

    const singleSliderSettings = {
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.product-slider-single-nav'
    };
    const singleNavSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        //asNavFor: '.product-slider-single'
    };

    const relatedProductsSliderSettings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
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

    const recentProductImages = 
    [
        'img/product-10.jpg',
        'img/product-8.jpg',
        'img/product-6.jpg',
        'img/product-4.jpg',
        'img/product-2.jpg'
    ];

    return (
        <>
            <div className="product-detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product-detail-top">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <Slider className="product-slider-single normal-slider" {...singleSliderSettings} >
                                        {imagePaths.map(image => 
                                            <img key={image} src={image} alt="Product Image" />
                                        )}
                                        </Slider>
                                        <Slider className="product-slider-single-nav normal-slider" {...singleNavSliderSettings}>
                                        {imagePaths.map(image => 
                                            <SliderNavImage key={image} imageSource={image} />
                                        )}
                                        </Slider>
                                    </div>
                                    <ProductContent />
                                </div>
                            </div>
                        
                        <ProductDetailBottom />
                        
                        <div className="product">
                            <div className="section-header">
                                <h1>Related Products</h1>
                            </div>
                            <Slider {...relatedProductsSliderSettings}>
                                    {recentProductImages.map(image =>
                                        <ProductItem key={image} image={image} />
                                    )}
                            </Slider>
                        </div>
                    </div>
                    
                    <Sidebar />
                </div>
            </div>
        </div>
        <Brand />
        </>
    );
}