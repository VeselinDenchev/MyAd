import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../../contexts/UserContext";

import CheckoutPayment from "./checkout-payment/CheckoutPayment";
import CheckoutSummary from "./checkout-summary/CheckoutSummary";
import ShippingAddress from "./shipping-address/ShippingAddress";


export default function Checkout() {
    return (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}