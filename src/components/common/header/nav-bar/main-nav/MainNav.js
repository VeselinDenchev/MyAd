import { NavLink } from 'react-router-dom';

export default function MainNav() {
    return (
        <div className="navbar-nav mr-auto">
            <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-item nav-link'>Products</NavLink>
            <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>
        </div>
    );
}