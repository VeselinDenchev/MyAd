import ProductItem from "../../product/product-item/ProductItem";
import Sidebar from "../sidebar/Sidebar";
import Pagination from "./pagination/Pagination";
import ProductViewTop from "./product-view-top/ProductViewTop";

export default function ProductList() {
    const productImages =
    [
        'img/product-1.jpg',
        'img/product-2.jpg',
        'img/product-3.jpg',
        'img/product-4.jpg',
        'img/product-5.jpg',
        'img/product-6.jpg',
        'img/product-7.jpg',
        'img/product-8.jpg',
        'img/product-9.jpg',
    ];

    return (
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <ProductViewTop />
                            </div>
                            {productImages.map(imageSource =>
                                <div key={imageSource} className="col-md-4">
                                    <ProductItem image={imageSource} />
                                </div>
                            )}
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <Pagination />
            </div>
        </div>
    );
}