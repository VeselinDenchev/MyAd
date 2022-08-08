import NavItem from "./nav-item/NavItem";

export default function SidebarNav()
{
    const navItems = 
    [
        {link: '#', iconClassName: "fa fa-home", destinationName: 'Home'},
        {link: '#', iconClassName: "fa fa-shopping-bag", destinationName: 'Best Selling'},
        {link: '#', iconClassName: "fa fa-plus-square", destinationName: 'New Arrivals'},
        {link: '#', iconClassName: "fa fa-female", destinationName: 'Fashion & Beauty'},
        {link: '#', iconClassName: "fa fa-child", destinationName: 'Kids & Babies Clothes'},
        {link: '#', iconClassName: "fa fa-tshirt", destinationName: 'Men & Women Clothes'},
        {link: '#', iconClassName: "fa fa-mobile-alt", destinationName: 'Gadgets & Accessories'},
        {link: '#', iconClassName: "fa fa-microchip", destinationName: 'Electronics & Accessories'}
    ];

    return (
        <div className="col-md-3">
            <nav className="navbar bg-light">
                <ul className="navbar-nav">
                    {navItems.map(navItem =>
                        <NavItem key={navItem.iconClassName} {...navItem} />
                    )}
                </ul>
            </nav>
        </div>
    );
}