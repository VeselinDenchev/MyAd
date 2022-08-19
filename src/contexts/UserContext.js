import { useEffect } from "react";
import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import * as userService from '../services/userService'

export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
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