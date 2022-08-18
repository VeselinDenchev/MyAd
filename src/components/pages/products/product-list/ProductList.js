import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductItem from "../../../product/product-item/ProductItem";
import Sidebar from "../../../sidebar/Sidebar";
import Pagination from "./pagination/Pagination";
import ProductViewTop from "./product-view-top/ProductViewTop";

import { ProductContext } from '../../../../contexts/ProductContext';

export default function ProductList() {
    const { products, searchProducts, filteredProducts } = useContext(ProductContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const [criteria, setCriteria] = useState('name');
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (searchParams.get('productName')) {
            setSearch(searchParams.get('productName'));
            searchProducts(search, criteria);
        }
        else {
            setSearch('');
        }
    }, [searchParams.get('productName'), products])

    
    function searchChangeHandler(event) {
        setSearch(event.target.value); 

        if (event.target.value === '') {
            setSearchParams({});
        }
        else {
            setSearchParams({productName: event.target.value});
        }
    }

    return (
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <ProductViewTop search={search} searchChangeHandler={searchChangeHandler} />
                            </div>
                            {filteredProducts.length > 0 && filteredProducts.map(product =>
                                <div key={product.id} className="col-md-4">
                                    <ProductItem product={product} />
                                </div>
                            )}
                        </div>
                    </div>
                    {products.length > 0 && <Sidebar searchParams={searchParams} setSearchParams={setSearchParams} products={products} />}
                </div>
                <Pagination />
            </div>
        </div>
    );
}