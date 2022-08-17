import DropdownItem from "./dropdown-item/DropdownItem";

import { useContext } from "react";
import { ProductContext } from "../../../../../../../contexts/ProductContext";

export default function DropdownMenu({filterName, filterTypes}) {
    const { sortProducts, filterProductsByPrice } = useContext(ProductContext);

    function sortClickHandler(event) {
        event.preventDefault();

        sortProducts(event.target.name);
    }

    function filterClickHandler(event) {
        event.preventDefault();

        filterProductsByPrice(event.target.name);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">{filterName}</div>
            <div className="dropdown-menu dropdown-menu-right">
                {filterTypes.map(type =>
                    <DropdownItem 
                        key={type.name} 
                        item={type} 
                        clickHandler={filterName === 'Sort by' ? sortClickHandler : filterClickHandler} 
                    />
                )}
            </div>
        </div>
    );
}