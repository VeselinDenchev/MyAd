import { useState, useEffect } from 'react';

import ProductItem from "../../../product/product-item/ProductItem";
import Sidebar from "../../../sidebar/Sidebar";
import Pagination from "./pagination/Pagination";
import ProductViewTop from "./product-view-top/ProductViewTop";

import * as productService from '../../../../services/productService';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        productService.getAllProducts()
             .then(products => setProducts(products.sort((a, b) => a.name.localeCompare(b.name))))
             .catch(error => {
                 setError("Can't fetch data!");
             });

        console.log(error);

        /*if (regions.length > 0) {
            setIsLoading(false);
        }*/
    }, []);
    
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
                            {products.length > 0 && products.map(product =>
                                <div key={product.id} className="col-md-4">
                                    <ProductItem product={product} />
                                </div>
                            )}
                        </div>
                    </div>
                    {products.length > 0 && <Sidebar products={products} />}
                </div>
                <Pagination />
            </div>
        </div>
    );
}