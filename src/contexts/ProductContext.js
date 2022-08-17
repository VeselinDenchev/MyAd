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

    function filterProducts(searchedText = '', criteria = 'name') {
        if (searchedText === '') {
            setFilteredProducts(products);
        }

        setFilteredProducts(products.filter(p => p[criteria].includes(searchedText)));
    }

    return (
        <ProductContext.Provider value={{products, filteredProducts, filterProducts}}>
            {children}
        </ProductContext.Provider>
    )

}