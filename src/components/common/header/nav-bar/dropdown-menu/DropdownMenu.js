import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../../../../../contexts/UserContext";

export default function DropdownMenu({items}) {
    const { userLogout } = useContext(UserContext);

    const navigate = useNavigate();

    function logoutClickHandler() {
        userLogout();
        navigate('/');
    }

    return (
        <div className="dropdown-menu">
            {items.map(item => 
                item.name !== 'Logout' 
                ? <NavLink key={item.name} to={item.link} className="dropdown-item">{item.name}</NavLink>
                : <button key={item.name} type="button" onClick={logoutClickHandler} className="dropdown-item">Logout</button>
            )}
        </div>
    );
}