import NavItem from "./nav-item/NavItem";

export default function SidebarNav()
{
    const navItems = 
    [
        {link: '#', iconClassName: "fa fa-home", destinationName: 'Home'},
        {link: '#', iconClassName: "fa fa-shopping-bag", destinationName: 'Best Selling'},
        {link: '#', iconClassName: "fas fa-business-time", destinationName: 'Business Laptops'},
        {link: '#', iconClassName: "fa fa-gamepad", destinationName: 'Gaming Laptops'},
        {link: '#', iconClassName: "fa fa-laptop", destinationName: 'Ultrabooks'},
        {link: '#', iconClassName: "fa fa-desktop", destinationName: 'Gaming PCs'},
        {link: '#', iconClassName: "fas fa-money-check", destinationName: 'Budget PCs'}
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