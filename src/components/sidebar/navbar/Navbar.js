import NavItem from "./nav-item/NavItem";

export default function Navbar() {
    const navLinks = 
    [
        {iconClassName: 'fa fa-female', content: 'Fashion & Beauty'},
        {iconClassName: 'fa fa-child', content: 'Kids & Babies Clothes'},
        {iconClassName: 'fa fa-tshirt', content: 'Men & Women Clothes<'},
        {iconClassName: 'fa fa-mobile-alt', content: 'Gadgets & Accessories'},
        {iconClassName: 'fa fa-microchip', content: 'Electronics & Accessories'}
    ];

    return (
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                {navLinks.map(navLink =>
                    <NavItem key={navLink.content} {...navLink} />
                )}
            </ul>
        </nav>
    );
}