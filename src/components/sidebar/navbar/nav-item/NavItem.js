export default function NavItem({iconClassName, content}) {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className={iconClassName}></i>{content}</a>
            </li>
        </>
    );
}