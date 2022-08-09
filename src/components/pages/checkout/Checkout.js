import { useLayoutEffect, useState } from "react";
import $ from 'jquery';

import BillingAddress from "./billing-address/BillingAddress";
import CheckoutPayment from "./checkout-payment/CheckoutPayment";
import CheckoutSummary from "./checkout-summary/CheckoutSummary";
import ShippingAddress from "./shipping-address/ShippingAddress";

export default function Checkout() {
    const [checkoutForm, setCheckoutForm] = useState({
        billingAddress: {
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            address: '',
            country: 'United States',
            city: '',
            state: '',
            zipCode: ''
        },
        willCreateAccount: false,
        willShipToDifferenAddress: false,
        shippingAddress: {
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            address: '',
            country: 'United States',
            city: '',
            state: '',
            zipCode: ''
        }
    });

    useLayoutEffect(() => {
        $('.checkout #willShipToDifferenAddress').change(function () {
            if($(this).is(':checked')) {
                $('.checkout .shipping-address').slideDown();
            } else {
                $('.checkout .shipping-address').slideUp();
            }
        });
    }, [checkoutForm.willShipToDifferenAddress])

    return (
        <div className="checkout">
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-lg-8">
                        <div className="checkout-inner">
                            <BillingAddress checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm} />
                            <ShippingAddress checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm} />
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
    );
}