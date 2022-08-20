import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { useLocation, useH } from "react-router-dom";

import * as orderService from '../services/orderService';
import { UserContext } from "./UserContext";

export const OrderContext = createContext();

export function OrderProvider({children}) {
    const { user } = useContext(UserContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.getAllUserOrders(user.accessToken)
             .then(orders => {
                setOrders(orders.sort((a, b) => (a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc)));
             })
             .catch(error => console.log("Can't fetch orders!"));
    }, []);

    function getOrderById(orderId) {
        const order = [...orders.filter(o => o.id === orderId)][0];

        return order;
    }

    return (
        <OrderContext.Provider 
            value={{
                orders,
                setOrders,
                getOrderById
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}