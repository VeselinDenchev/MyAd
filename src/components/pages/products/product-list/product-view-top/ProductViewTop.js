import { useContext, useState } from "react";
import { ProductContext } from "../../../../../contexts/ProductContext";

import ProductFilter from "./product-filter/ProductFilter";
import ProductSearch from "./product-search/ProductSearch";

export default function ProductViewTop() {
    const { filterProducts } = useContext(ProductContext);

    const [search, setSearch] = useState('');
    const [criteria, setCriteria] = useState('name');

    const filters = 
    [
        {name: 'Product sort by', types: ['Newest', 'Popular', 'Most sale']},
        {
            name: 'Product price range', 
            types: 
            [
                '$0 to $50',
                '$51 to $100',
                '$101 to $200',
                '$201 to $500'
            ]
        }
    ];

    function searchChangeHandler (event) {
        setSearch(event.target.value);
    }

    function searchSubmitHandler(event) {
        event.preventDefault();

        filterProducts(search, criteria);
    }

    return (
        <div className="product-view-top">
            <div className="row">
            <ProductSearch searchedText={search} onSearchChange={searchChangeHandler} onSearchSubmit={searchSubmitHandler} />
            {filters.map(filter =>
                <ProductFilter key={filter.name} filter={filter} />
            )}
            </div>
        </div>
    );
}