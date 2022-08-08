import { useState } from "react";

export default function ProductSearch() {
    const [search, setSearch] = useState('');

    const searchChangeHandler = (event) => setSearch(event.target.value);

    return (
        <div className="col-md-4">
            <div className="product-search">
                <input type="text" value={search} onChange={searchChangeHandler} placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
            </div>
        </div>
    );
}