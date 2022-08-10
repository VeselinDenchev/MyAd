import { NavLink } from "react-router-dom";

export default function DropdownMenu({items}) {
    return (
        <div className="dropdown-menu">
            {items.map(item => 
                <NavLink key={item.name} to={item.link} className="dropdown-item">{item.name}</NavLink>
            )}
        </div>
    );
}