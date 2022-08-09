import { useEffect, useState } from "react";
import InputText from "./input-text/InputText";

export default function AddressForm({setCheckoutForm, outerAddressForm}) {
    const [addressForm, setAddressForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        country: 'United States',
        city: '',
        state: '',
        zipCode: '',
    });

    useEffect(() => {
        const addressFormKeys = Object.entries(addressForm);
        const outerAddressFormKeys = Object.entries(outerAddressForm);

        for (let index = 0; index < addressFormKeys.length; index++) {
            if (addressFormKeys[index] !== outerAddressFormKeys[index]) {
                setCheckoutForm(checkoutForm => ({...checkoutForm, billingAddress: addressForm}))
            }
        }
        console.log(addressFormKeys);
    }, [addressForm])


    let inputTexts = 
    [
        {name: 'firstName', label: 'First Name', value: addressForm.firstName},
        {name: 'lastName', label: 'Last Name', value: addressForm.lastName},
        {name: 'email', label: 'E-mail', value: addressForm.email},
        {name: 'mobileNumber', label: 'Mobile No', value: addressForm.mobileNumber},
        {name: 'address', label: 'Address', value: addressForm.address},
        {name: 'city', label: 'City', value: addressForm.city},
        {name: 'state', label: 'State', value: addressForm.state},
        {name: 'zipCode', label: 'ZIP Code', value: addressForm.zipCode},
    ];

    const inputChangeHandler = (event) => {
        setAddressForm({...addressForm, [event.target.name]: event.target.value});
    }

    return (
        <>
            <InputText {...{...inputTexts[0], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <InputText {...{...inputTexts[1], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <InputText {...{...inputTexts[2], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <InputText {...{...inputTexts[3], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <InputText {...{...inputTexts[4], inputChangeHandler: inputChangeHandler, isWide: true}} />
            <InputText {...{...inputTexts[5], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <div className="col-md-6">
                <label htmlFor="country">Country</label>
                <select className="custom-select" id="country" name="country" value={addressForm.country} onChange={inputChangeHandler}>
                    <option value="USA">United States</option>
                    <option value="AFG">Afghanistan</option>
                    <option value="ALB">Albania</option>
                    <option value="ALG">Algeria</option>
                </select>
            </div>
            <InputText {...{...inputTexts[6], inputChangeHandler: inputChangeHandler, isWide: false}} />
            <InputText {...{...inputTexts[7], inputChangeHandler: inputChangeHandler, isWide: false}} />
        </>
    );
}