import { useState, useEffect, useContext } from 'react';

import ProductItem from "../../../product/product-item/ProductItem";
import Sidebar from "../../../sidebar/Sidebar";
import Pagination from "./pagination/Pagination";
import ProductViewTop from "./product-view-top/ProductViewTop";

import { ProductContext } from '../../../../contexts/ProductContext';

export default function ProductList() {
    const { products, filteredProducts } = useContext(ProductContext);

    return (
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <ProductViewTop />
                            </div>
                            {filteredProducts.length > 0 && filteredProducts.map(product =>
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