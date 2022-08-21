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
    }, [product]);

    const singleSliderSettings = {
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.product-slider-single-nav'
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