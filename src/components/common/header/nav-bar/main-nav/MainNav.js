import { NavLink } from 'react-router-dom';

import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function MainNav() {
    return (
        <div className="navbar-nav mr-auto">
            <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-item nav-link'>Products</NavLink>
            <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>
            <NavLink to="/checkout" className="nav-item nav-link">Checkout</NavLink>
        </div>
    );
}