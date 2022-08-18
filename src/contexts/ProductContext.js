import { createContext, useState, useEffect } from "react";
import { useLocation, useH } from "react-router-dom";

import * as productService from '../services/productService';

export const ProductContext = createContext();

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const location = useLocation();
    const [previousLocationPathName, setPreviousLocationPathName] = useState('');

    useEffect(() => {
        productService.getAllProducts()
             .then(products => {
                setProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
                setFilteredProducts(products);
             })
             .catch(error => console.log("Can't fetch data!"));

        /*if (products.length > 0) {
            setIsLoading(false);
        }*/
    }, []);

    useEffect(() => {
        if ((previousLocationPathName === '/' && location.pathname.includes('/products'))
            || (previousLocationPathName.includes('/products') && !location.pathname.includes('/products'))) {
            setFilteredProducts(products);
        }

        setPreviousLocationPathName(location.pathname);
    }, [location.pathname])

    function searchProducts(searchedText = '', criteria = 'name') {
        if (searchedText === '') {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter(p => p[criteria].includes(searchedText)));
        }
    }

    function sortProducts(sortType) {
        let sortFunction;

        switch (sortType) {
            case 'mostSale':
                sortFunction = (a, b) => b.salesCount - a.salesCount;
                break;

            case 'newest':
                sortFunction = (a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc);
                break;
        
            case "highestRated":
                sortFunction = (a, b) => b.rating - a.rating;
                break;

            case "highestToLowestPrice":
                sortFunction = (a, b) => b.price - a.price;

            case "lowestToHighestPrice":
                sortFunction = (a, b) => a.price - b.price;
                break;

            default:
                sortFunction = (a, b) => a.name.localeCompare(b.name);
                break;
        }

        setFilteredProducts([...filteredProducts].sort(sortFunction));
    }

    function filterProductsByPrice(priceRangeString) {
        if (priceRangeString === 'noRange') {
            setFilteredProducts(products);
        }
        else if (priceRangeString === '500+') {
            setFilteredProducts(products.filter(p => p.price > 500));
        }
        else {
            const priceRangeTokens = priceRangeString.split('-');
            const minPrice = parseFloat(priceRangeTokens[0]);
            const maxPrice = parseFloat(priceRangeTokens[1]);
            setFilteredProducts(products.filter(p => (p.price >= minPrice && p.price <= maxPrice)));
        }
    }

    function filterProductsByBrand(brandName) {
        setFilteredProducts(products.filter(p => p.model.brand.name === brandName));
        console.log(filteredProducts);
    }

    const filterProductsByCategory = (categoryName) => {
        setFilteredProducts(products.filter(p => p.model.category.name === categoryName));
    } 

    return (
        <ProductContext.Provider 
            value={{
                products,
                filteredProducts, 
                searchProducts, 
                sortProducts, 
                filterProductsByPrice, 
                filterProductsByBrand,
                filterProductsByCategory
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}