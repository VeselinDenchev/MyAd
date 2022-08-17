import { createContext, useState, useEffect } from "react";

import * as productService from '../services/productService';

export const ProductContext = createContext();

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

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

    function searchProducts(searchedText = '', criteria = 'name') {
        if (searchedText === '') {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter(p => p[criteria].includes(searchedText)));
        }
    }

    function sortProducts(sortType) {
        switch (sortType) {
            case 'mostSale':
                setFilteredProducts([...filteredProducts].sort(function(a, b) {
                    if (a.salesCount > b.salesCount) return 1;
                    
                    if (a.salesCount === b.salesCount) return 0;
                    
                    return -1;
                }));
                break;

            case 'newest':
                setFilteredProducts([...filteredProducts].sort((a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc)));
                break;
        
            case "highestRated":
                setFilteredProducts([...filteredProducts].sort(function(a, b) {
                    if (a.rating < b.rating) return 1;

                    if (a.rating === b.rating) return 0;


                    return -1;
                }));
                break;

            case "highestToLowestPrice":
            case "lowestToHighestPrice":
                setFilteredProducts([...filteredProducts].sort((a, b) => filterByPrice(a, b, sortType === 'lowestToHighestPrice')));
                break;

            default:
                setFilteredProducts([...filteredProducts].sort((a, b) => a.name.localeCompare(b.name)));
                break;
        }
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

    return (
        <ProductContext.Provider value={{products, filteredProducts, searchProducts, sortProducts, filterProductsByPrice, filterProductsByBrand}}>
            {children}
        </ProductContext.Provider>
    )
}

function filterByPrice(firstValue, secondValue, isFromLowestToHighest) {
    if (firstValue.price < secondValue.price) return isFromLowestToHighest ? -1 : 1;

    if (firstValue.price > secondValue.price) return !isFromLowestToHighest ? -1 : 1;

    return 0;
}