import { useEffect } from "react";
import { useState } from "react";

import getAllBrands from "../../../../services/brandService";

import Brand from "./brand/Brand";

export default function SidebarWidgetBrands({searchParams, setSearchParams}) {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getAllBrands()
            .then(brands => setBrands(brands.sort((a, b) => a.name.localeCompare(b.name))))
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className="sidebar-widget brands">
            <h2 className="title">Brands</h2>
            <ul>
                {brands.map(brand =>
                    <Brand key={brand.name} brand={brand} searchParams={searchParams} setSearchParams={setSearchParams} />
                )}
            </ul>
        </div>
    );
}