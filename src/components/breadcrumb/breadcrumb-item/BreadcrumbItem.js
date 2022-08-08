import { NavLink } from 'react-router-dom'; 

export default function BreadcrumbItem({link}) {
    console.log(link)
    return (
        <li className="breadcrumb-item">
            <NavLink to={link.to} className="breadcrumb-item">{link.name}</NavLink>
        </li>
    );
}