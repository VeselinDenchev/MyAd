import { useContext, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { ProductContext } from "../../../../contexts/ProductContext";

export default function NavItem({iconClassName, destinationName}) {
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const { filterProductsByCategory } = useContext(ProductContext);

    useEffect(() => {
         if (searchParams && destinationName === searchParams?.get('categoryName')) {
             filterProductsByCategory(destinationName);
             console.log('entered');
         }
    }, [searchParams?.get('categoryName')])

    function clickHandler(event) {
        event.preventDefault();

        filterProductsByCategory(destinationName);

        setSearchParams({categoryName: destinationName});
    }

    return (
        (location.pathname.includes('/products') &&
            <li className="nav-item" style={{fontSize: '14pt', marginTop: '0.5em', marginBottom: '0.5em'}}>
                <a className="nav-link" href="#" onClick={clickHandler}><i className={iconClassName}></i>{destinationName}</a>
            </li>
        )
        ||
        (<li className="nav-item" style={{fontSize: '14pt', marginTop: '0.5em', marginBottom: '0.5em'}}>
            <Link className="nav-link" to={`/products?categoryName=${destinationName.replace(' ', '+')}`}><i className={iconClassName}></i>{destinationName}</Link>
        </li>)
    );
}