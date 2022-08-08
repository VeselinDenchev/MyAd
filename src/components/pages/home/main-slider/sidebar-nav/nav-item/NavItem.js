export default function NavItem({link, iconClassName, destinationName})
{
    return (
        <li className="nav-item">
            <a className="nav-link" href={link}><i className={iconClassName}></i>{destinationName}</a>
        </li>
    );
}