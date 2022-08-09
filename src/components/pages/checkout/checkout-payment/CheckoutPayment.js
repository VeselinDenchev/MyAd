import { useState } from "react";

import CheckoutButton from "./checkout-button/CheckoutButton";
import PaymentMethod from "./payment-method/PaymentMethod";

export default function CheckoutPayment() {
    const [paymentMethods, setPaymentMethods] = useState(
        [
            {id: 'payment-1', name: 'Paypal', isChecked: true},
            {id: 'payment-2', name: 'Payoneer', isChecked: false},
            {id: 'payment-3', name: 'Check Payment', isChecked: false},
            {id: 'payment-4', name: 'Direct Bank Transfer', isChecked: false},
            {id: 'payment-5', name: 'Cash on Delivery', isChecked: false},
        ]
    );
    const [lastCheckedRadioButtonId, setLastCheckedRadioButtonId] = useState('payment-1');

    function radioButtonCheckedHandler(newCheckedRadioButtonId) {
        const oldCheckedRadioButton = paymentMethods.find(method => method.id === lastCheckedRadioButtonId);
        setPaymentMethods(paymentMethods => paymentMethods.map(method => method.id !== lastCheckedRadioButtonId ? method : {...oldCheckedRadioButton, isChecked: false}));

        const newCheckedRadioButton = paymentMethods.find(method => method.id === newCheckedRadioButtonId);
        setPaymentMethods(paymentMethods => paymentMethods.map(method => method.id !== newCheckedRadioButtonId ? method : {...newCheckedRadioButton, isChecked: true}));
        setLastCheckedRadioButtonId(newCheckedRadioButton.id);
    }

    return (
        <div className="checkout-payment">
            <div className="payment-methods">
                <h1>Payment Methods</h1>
                {paymentMethods.map(paymentMethod =>
                    <PaymentMethod 
                        key={paymentMethod.id} 
                        {...paymentMethod} 
                        radioButtonCheckedHandler={radioButtonCheckedHandler}
                        setLastCheckedRadioButtonId = {setLastCheckedRadioButtonId}
                    />
                )}
            </div>
            <CheckoutButton />
        </div>
    );
}