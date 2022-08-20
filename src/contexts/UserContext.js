import { useEffect } from "react";
import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartContext } from "./CartContext";

export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const { clearCart } = useContext(CartContext);

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        clearCart();
        setAuth({});
    };

    return (
        <UserContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken,
        }}>
            {children}
        </UserContext.Provider>  
    );
};