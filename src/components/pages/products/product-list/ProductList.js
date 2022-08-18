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

    const productsPerPage = 1;

    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [pagesCount, setPagesCount] = useState(Math.ceil(filteredProducts.length / productsPerPage));
    const [currentPageData, setCurrentPageData] = useState(filteredProducts.slice(offset, offset + productsPerPage));

    useEffect(() => {
        setCurrentPageData(filteredProducts.slice(offset, offset + productsPerPage));
        console.log(pagesCount);
    }, [currentPage, filteredProducts])

    useEffect(() => {
        setPagesCount(Math.ceil(filteredProducts.length / productsPerPage));
    }, [filteredProducts.length])

    useEffect(() => {
        if (searchParams.get('productName')) {
            setSearch(searchParams.get('productName'));
            searchProducts(search, criteria);
        }
        else {
            setSearch('');
        }

    }, [searchParams.get('productName')])
    
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
                            {filteredProducts.length > 0 && currentPageData.map(product =>
                                <div key={product.id} className="col-md-4">
                                    <ProductItem product={product} />
                                </div>
                            )}
                        </div>
                    </div>
                    {products.length > 0 && <Sidebar products={products} />}
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={pagesCount} offset={offset} />
            </div>
        </div>
    );
}