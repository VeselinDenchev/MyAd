import { useEffect, useState } from "react";
import InputText from "../../../input-text/InputText";

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
    }, [addressForm, outerAddressForm, setCheckoutForm])

    
    const inputChangeHandler = (event) => setAddressForm({...addressForm, [event.target.name]: event.target.value});

    const inputTexts = 
    [
        {name: 'firstName',  label: 'First Name', value: addressForm.firstName, isWide: false},
        {name: 'lastName', label: 'Last Name', value: addressForm.lastName, isWide: false},
        {name: 'email', label: 'E-mail', value: addressForm.email, isWide: false},
        {name: 'mobileNumber', label: 'Mobile No', value: addressForm.mobileNumber, isWide: false},
        {name: 'address', label: 'Address', value: addressForm.address, isWide: true},
        {name: 'city', label: 'City', value: addressForm.city, isWide: false},
        {name: 'state', label: 'State', value: addressForm.state, isWide: false},
        {name: 'zipCode', label: 'ZIP Code', value: addressForm.zipCode, isWide: false}
    ];


    return (
        <>
            <InputText {...{...inputTexts[0], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[1], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[2], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[3], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[4], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[5], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <div className="col-md-6">
                <label htmlFor="country">Country</label>
                <select className="custom-select" id="country" name="country" value={addressForm.country} onChange={inputChangeHandler}>
                    <option value="USA">United States</option>
                    <option value="AFG">Afghanistan</option>
                    <option value="ALB">Albania</option>
                    <option value="ALG">Algeria</option>
                </select>
            </div>
            <InputText {...{...inputTexts[6], type: 'text', inputChangeHandler: inputChangeHandler}} />
            <InputText {...{...inputTexts[7], type: 'text', inputChangeHandler: inputChangeHandler}} />
        </>
    );
}