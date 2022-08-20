import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { UserContext } from "../../../../contexts/UserContext";
import InputText from "../../../inputs/input-text/InputText";

export default function AddressForm() {
    const [errors, setErrors] = useState({});

    const {checkoutForm, setCheckoutForm} = useContext(CheckoutContext);
    
    const inputChangeHandler = (event) => setCheckoutForm({...checkoutForm, [event.target.name]: event.target.value});

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: checkoutForm[e.target.name].length < bound,
        }));
    }

    const inputTexts = 
    [
        {name: 'firstName',  label: 'First Name', value: checkoutForm.firstName, isWide: false},
        {name: 'lastName', label: 'Last Name', value: checkoutForm.lastName, isWide: false},
        {name: 'email', label: 'E-mail', value: checkoutForm.email, isWide: false},
        {name: 'mobileNumber', label: 'Mobile No', value: checkoutForm.mobileNumber, isWide: false},
        {name: 'address', label: 'Address', value: checkoutForm.address, isWide: true}
    ];

    return (
        <>
            {inputTexts.map(input => 
                <div key={input.name} className="col-md-10">
                    <InputText 
                        {...input} 
                        type='text' 
                        inputChangeHandler={inputChangeHandler} 
                        blurChangeHandler={e => minLength(e, 4)} 
                    />
                    {errors[input.name] && <div className="text-danger" style={{marginLeft: '1em'}}>{input.label} must be longer than 4 characters</div>}
            </div>
            )}
        </>
    );
}