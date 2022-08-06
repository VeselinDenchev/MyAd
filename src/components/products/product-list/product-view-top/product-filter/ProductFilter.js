import { useState } from "react";
import DropdownMenu from "./dropdown-menu/DropdownMenu";

export default function ProductFilter({filter}) {
    return (
        <div className="col-md-4">
            <div className="product-short">
                <DropdownMenu filterName={filter.name} filterTypes={filter.types} />
            </div>
        </div>
    );
}