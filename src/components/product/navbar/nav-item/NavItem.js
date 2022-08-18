import { useContext } from "react";
import { ProductContext } from "../../../../contexts/ProductContext";

export default function NavItem({iconClassName, destinationName}) {
    const { filterProductsByCategory } = useContext(ProductContext);

    function clickHandler(event) {
        event.preventDefault();

        filterProductsByCategory(destinationName);
    }

    return (
        <>
            <li className="nav-item" style={{fontSize: '14pt', marginTop: '0.5em', marginBottom: '0.5em'}}>
                <a className="nav-link" href="#" onClick={clickHandler}><i className={iconClassName}></i>{destinationName}</a>
            </li>
        </>
    );
}