import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function AuthNav({dropdownItems}) {
    return (
        <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                <DropdownMenu items={dropdownItems} />
                </div>
        </div>
    );
}