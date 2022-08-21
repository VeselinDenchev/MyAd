import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../contexts/CartContext";
import { CheckoutContext } from "../../../contexts/CheckoutContext";

import * as orderService from '../../../services/orderService';

import ShippingAddress from './shipping-address/ShippingAddress';
import CheckoutSummary from './checkout-summary/CheckoutSummary';
import CheckoutPayment from './checkout-payment/CheckoutPayment';
import { UserContext } from "../../../contexts/UserContext";
import { OrderContext } from "../../../contexts/OrderContext";

export default function Checkout() {
    const { cart, clearCart, subTotal } = useContext(CartContext)
    const { checkoutForm } = useContext(CheckoutContext);
    const { user } = useContext(UserContext);
    const { orders, setOrders } = useContext(OrderContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.accessToken) {
           navigate('/login'); 
        }
    }, []);

    function orderSubmitHandler(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('firstName', checkoutForm.firstName);
        formData.append('lastName', checkoutForm.lastName);
        formData.append('phoneNumber', checkoutForm.mobileNumber);
        formData.append('address', checkoutForm.address);
        formData.append('subTotal', subTotal);

        for (let index = 0; index < cart.length; index++) {
            formData.append(`cartItems[${index}][productId]`, cart[index].productId);
            formData.append(`cartItems[${index}][quantity]`, cart[index].quantity);
        }

        orderService.createOrder(formData, user.accessToken)
            .then(order => {
                clearCart();
                setOrders([...orders, order]);
                navigate('/');
            })
            .catch(error => console.log(error));

        // setUserEmails([...userEmails, registerForm.email]);
    }

    return (
        <form onSubmit={orderSubmitHandler}>
            <div className="checkout">
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-inner">
                                <ShippingAddress />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-inner">
                                <CheckoutSummary />
                                <CheckoutPayment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}