import { useEffect } from "react";
import { useContext } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { ProductContext } from "../../../../../contexts/ProductContext";

export default function Brand({brand}) {
    const { filterProductsByBrand } = useContext(ProductContext);

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (brand.name === searchParams.get('brandName')) {
            filterProductsByBrand(brand.name);
        }
    }, [searchParams.get('brandName')])

    function brandClickHandler(event) {
        event.preventDefault();

        filterProductsByBrand(brand.name);

        setSearchParams({brandName: brand.name});
    }

    return (
        <li>
            {location.pathname.includes('/products') 
            ? <><a onClick={brandClickHandler} href="#">{brand.name}</a><span>({brand.productsCount})</span></>
            : <><Link to={`/products?brandName=${brand.name}`}>{brand.name}</Link><span>({brand.productsCount})</span></>}
        </li>
    );
}