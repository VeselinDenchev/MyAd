import { Link } from 'react-router-dom';

import AuthNav from "./auth-nav/AuthNav";
import MainNav from "./main-nav/MainNav";

export default function NavBar() {
    const mainNavDropdownItems = 
    [
        {name: 'Wishlist', link: '/wishlist'}, 
        {name: 'Login & Register', link: '/login'},
        {name: 'Contact Us', link: '/contact'} 
    ];

    const authNavDropdownItems = 
    [
        {name: 'Login', link: '/login'},
        {name: 'Register', link: '/login'} 
    ];

    return (
        <div className="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link to="/" className="navbar-brand">MENU</Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <MainNav dropdownItems={mainNavDropdownItems} />
                        <AuthNav dropdownItems={authNavDropdownItems} />
                    </div>
                </nav>
            </div>
        </div>
    );
}