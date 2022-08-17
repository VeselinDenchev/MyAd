import { useEffect } from "react";
import { useState } from "react";

import getAllBrands from "../../../../services/brandService";

import Brand from "./brand/Brand";

export default function SidebarWidgetBrands() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getAllBrands()
            .then(brands => setBrands(brands.sort((a, b) => a.name.localeCompare(b.name))))
            .catch(error => {
                console.log(error);
            });
    }, [])

    // const brands = 
    // [
    //     {name: 'Nulla', quantity: 45},
    //     {name: 'Curabitur', quantity: 34},
    //     {name: 'Nunc', quantity: 67},
    //     {name: 'Ullamcorper', quantity: 74},
    //     {name: 'Fusce', quantity: 89},
    //     {name: 'Sagittis', quantity: 28},
    // ];

    return (
        <div className="sidebar-widget brands">
            <h2 className="title">Brands</h2>
            <ul>
                {brands.map(brand =>
                    <Brand key={brand.name} brand={brand} />
                )}
            </ul>
        </div>
    );
}