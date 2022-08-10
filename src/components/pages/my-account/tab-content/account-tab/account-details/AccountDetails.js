import { useState } from "react";
import InputText from "../../../../../inputs/input-text/InputText";

import UpdateButton from "../update-button/UpdateButton";

export default function AccountDetails() {
    const [accountForm, setAccountForm] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        address: ''
    });

    const inputChangeHandler = (event) => setAccountForm({...accountForm, [event.target.name]: event.target.value});
    
    const inputTexts = 
    [
        {name: 'firstName', label: 'First Name', value: accountForm.firstName, isWide: false},
        {name: 'lastName', label: 'Last Name', value: accountForm.lastName, isWide: false},
        {name: 'mobileNumber', label: 'Mobile No', value: accountForm.mobileNumber, isWide: false},
        {name: 'email', label: 'E-mail', value: accountForm.email, isWide: false},
        {name: 'address', label: 'Address', value: accountForm.address, isWide: true} 
    ];

    return (
        <>
            <h4>Account Details</h4>
            <div className="row">
                {inputTexts.map(inputText =>
                    <InputText key={inputText.name} {...inputText} type='text' inputChangeHandler={inputChangeHandler} />
                )}
                <UpdateButton text="Update Account" />
            </div>
        </>
    );
}