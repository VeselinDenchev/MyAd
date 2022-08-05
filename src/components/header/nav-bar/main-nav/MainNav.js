import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function MainNav({dropdownItems}) {
    return (
        <div className="navbar-nav mr-auto">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="product-list.html" className="nav-item nav-link">Products</a>
            <a href="product-detail.html" className="nav-item nav-link">Product Detail</a>
            <a href="cart.html" className="nav-item nav-link">Cart</a>
            <a href="checkout.html" className="nav-item nav-link">Checkout</a>
            <a href="my-account.html" className="nav-item nav-link">My Account</a>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                <DropdownMenu items={dropdownItems} />
            </div>
        </div>
    );
}