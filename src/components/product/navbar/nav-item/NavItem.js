import { useContext, useEffect } from "react";
import { ProductContext } from "../../../../contexts/ProductContext";

export default function NavItem({iconClassName, destinationName, searchParams, setSearchParams}) {
    const { filterProductsByCategory } = useContext(ProductContext);

    useEffect(() => {
         if (searchParams && destinationName === searchParams?.get('categoryName')) {
             filterProductsByCategory(destinationName);
         }
    }, [searchParams?.get('categoryName')])

    function clickHandler(event) {
        event.preventDefault();

        filterProductsByCategory(destinationName);

        setSearchParams({categoryName: destinationName});
    }

    return (
        <>
            <li className="nav-item" style={{fontSize: '14pt', marginTop: '0.5em', marginBottom: '0.5em'}}>
                <a className="nav-link" href="#" onClick={clickHandler}><i className={iconClassName}></i>{destinationName}</a>
            </li>
        </>
    );
}