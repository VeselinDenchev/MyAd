import { NavLink } from 'react-router-dom';

import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function MainNav({dropdownItems}) {
    return (
        <div className="navbar-nav mr-auto">
            <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-item nav-link'>Products</NavLink>
            <NavLink to="/product-detail" className="nav-item nav-link">Product Detail</NavLink>
            <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>
            <NavLink to="/checkout" className="nav-item nav-link">Checkout</NavLink>
            <NavLink to="/my-account" className="nav-item nav-link">My Account</NavLink>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                <DropdownMenu items={dropdownItems} />
            </div>
        </div>
    );
}