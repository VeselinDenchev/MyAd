import { Link } from "react-router-dom";

export default function CartButton({cartItemsCount}) {
    return (
        <Link to="/cart" className="btn cart" onMouseDown={(event) => (event.preventDefault())}>
            <i className="fa fa-shopping-cart" />
            <span>({cartItemsCount})</span>
        </Link>
    );
}