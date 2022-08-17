import { useContext, useState } from "react";
import { ProductContext } from "../../../../../contexts/ProductContext";

import ProductFilter from "./product-filter/ProductFilter";
import ProductSearch from "./product-search/ProductSearch";

export default function ProductViewTop() {
    const { searchProducts } = useContext(ProductContext);

    const [search, setSearch] = useState('');
    const [criteria, setCriteria] = useState('name');

    const filters = 
    [
        {name: 'Sort by', 
        types: [
            {label: 'Alphabetically', name: 'alphabetically'}, 
            {label: 'Most sale', name: 'mostSale'},
            {label: 'Newest', name: 'newest'} ,
            {label: 'Highest rated', name: 'highestRated'},
            {label: 'Highest to lowest price', name: 'highestToLowestPrice'},
            {label: 'Lowest to highest price', name: 'lowestToHighestPrice'}
        ]},
        {
            name: 'Price range', 
            types: 
            [
                {label: 'No range', name: 'noRange'},
                {label: '$0 to $50', name: '0-50'},
                {label: '$51 to $100', name: '51-100'},
                {label: '$101 to $200', name: '101-200'},
                {label: '$201 to $500', name: '201-500'},
                {label: 'over $500', name: '500+'}
            ]
        }
    ];

    const searchChangeHandler = (event) => setSearch(event.target.value);

    function searchSubmitHandler(event) {
        event.preventDefault();

        searchProducts(search, criteria);
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