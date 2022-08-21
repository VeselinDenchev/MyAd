import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../../contexts/UserContext';

export default function MainNav() {
    const { user } = useContext(UserContext);

    return (
        <div className="navbar-nav mr-auto">
            <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-item nav-link'>Products</NavLink>
            {user.accessToken && <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>}
        </div>
    );
}