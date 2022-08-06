import ProductFilter from "./product-filter/ProductFilter";
import ProductSearch from "./product-search/ProductSearch";

export default function ProductViewTop() {
    const filters = 
    [
        {name: 'Product short by', types: ['Newest', 'Popular', 'Most sale']},
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


    return (
        <div className="product-view-top">
            <div className="row">
            <ProductSearch />
            {filters.map(filter =>
                <ProductFilter key={filter.name} filter={filter} />
            )}
            </div>
        </div>
    );
}