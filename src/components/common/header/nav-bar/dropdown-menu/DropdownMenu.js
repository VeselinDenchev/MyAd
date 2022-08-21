import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { OrderContext } from "../../../../../contexts/OrderContext";
import { UserContext } from "../../../../../contexts/UserContext";

export default function DropdownMenu({items}) {
    const { userLogout } = useContext(UserContext);
    const { setOrders } = useContext(OrderContext);

    const navigate = useNavigate();

    function logoutClickHandler() {
        userLogout();
        setOrders([]);
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