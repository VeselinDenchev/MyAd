import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../../contexts/UserContext";

import DropdownMenu from "../dropdown-menu/DropdownMenu";

export default function AuthNav() {
    const { user } = useContext(UserContext);
    const [authNavHeader, setAuthNavHeader] = useState('Login/Register');


    useEffect(() => {
        if (user?.email) {
            setAuthNavHeader(`${user.firstName} ${user.lastName}`);
        }
        else {
            setAuthNavHeader('Login/Register');
        }
    }, [user])

    const items = authNavHeader === 'Login/Register'
                    ? [{name: 'Login', link: '/login'}, {name: 'Register', link: '/register'}]
                    : [{name: 'Orders', link: '/orders'}, {name: 'Logout', link: '/'}];

    return (
        <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{authNavHeader}</a>
                <DropdownMenu items={items} />
                </div>
        </div>
    );
}