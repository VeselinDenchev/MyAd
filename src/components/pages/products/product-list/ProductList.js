import { useState, useEffect, useContext } from 'react';

import ProductItem from "../../../product/product-item/ProductItem";
import Sidebar from "../../../sidebar/Sidebar";
import Pagination from "./pagination/Pagination";
import ProductViewTop from "./product-view-top/ProductViewTop";

import * as productService from '../../../../services/productService';
import { ProductContext } from '../../../../contexts/ProductContext';

export default function ProductList() {
    const { products } = useContext(ProductContext);

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