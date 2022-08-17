export default function NavItem({iconClassName, destinationName}) {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className={iconClassName}></i>{destinationName}</a>
            </li>
        </>
    );
}