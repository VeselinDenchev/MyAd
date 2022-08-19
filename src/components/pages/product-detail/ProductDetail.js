import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { ProductContext } from "../../../contexts/ProductContext";
import Brand from "../../brand/Brand";
import ProductItem from "../../product/product-item/ProductItem";
import Sidebar from "../../sidebar/Sidebar";
import ProductContent from "./product-content/ProductContent";
import ProductDetailBottom from "./product-detail-bottom/ProductDetailBottom";
import SliderNavImage from "./slider-nav-image/SliderNavImage";

export default function ProductDetail() {
    const { products, product, setProductId} = useContext(ProductContext);
    const { productId } = useParams();

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        setProductId(productId);
        window. scrollTo(0, 0);
    }, [products, productId]);

    useEffect(() => {
        if (product) {
            setRelatedProducts([...products.filter(p => p.model.brand.id === product.model.brand.id || p.model.category.id === product.model.category.id)]);
        }

        console.log(products);
        console.log(relatedProducts);
    }, [product])


    // const imagePaths = 
    // [
    //     'img/product-1.jpg',
    //     'img/product-3.jpg',
    //     'img/product-5.jpg',
    //     'img/product-7.jpg',
    //     'img/product-9.jpg',
    //     'img/product-10.jpg'
    // ];

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
                                        {product && product.images.map(image => 
                                            <img key={image} src={image.url} alt="Product Image" />
                                        )}
                                        </Slider>
                                        {/* <Slider className="product-slider-single-nav normal-slider" {...singleNavSliderSettings}>
                                        {imagePaths.map(image => 
                                            <SliderNavImage key={image} imageSource={image} />
                                        )}
                                        </Slider> */}
                                    </div>
                                    {product && <ProductContent product={product} />}
                                </div>
                            </div>
                        
                        {product && <ProductDetailBottom product={product} />}
                        
                        <div className="product">
                            <div className="section-header">
                                <h1>Related Products</h1>
                            </div>
                            <Slider {...relatedProductsSliderSettings}>
                                {relatedProducts && relatedProducts.map(product =>
                                    <ProductItem key={product.id} product={product} />
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