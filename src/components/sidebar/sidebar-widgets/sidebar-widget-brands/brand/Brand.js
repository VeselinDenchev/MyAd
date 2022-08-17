import { useContext } from "react";
import { ProductContext } from "../../../../../contexts/ProductContext";

export default function Brand({brand}) {
    const { filterProductsByBrand } = useContext(ProductContext);

    function brandClickHandler(event) {
        event.preventDefault();

        filterProductsByBrand(brand.name);
    }

    return (
        <>
            <li><a onClick={brandClickHandler} href="#">{brand.name}</a><span>({brand.productsCount})</span></li>
        </>
    );
}