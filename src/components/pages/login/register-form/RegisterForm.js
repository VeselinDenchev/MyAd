import { useState } from "react";
import InputText from "../../../inputs/input-text/InputText";
import SubmitButton from "../submit-button/SubmitButton";

export default function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        retypePassword: '',
    });
    
    const inputs = 
    [
        {name: 'firstName',  label: 'First Name', value: registerForm.firstName, type: 'text'},
        {name: 'lastName', label: 'Last Name', value: registerForm.lastName, type: 'text'},
        {name: 'email', label: 'E-mail', value: registerForm.email, type: 'email'},
        {name: 'mobileNumber', label: 'Mobile No', value: registerForm.mobileNumber, type: 'text'},
        {name: 'password', label: 'Password', value: registerForm.password, type: 'password'},
        {name: 'retypePassword', label: 'Retype Password', value: registerForm.retypePassword, type: 'password'}
    ];

    const inputChangeHandler = (event) => setRegisterForm({...registerForm, [event.target.name]: event.target.value});

    return (
        <div className="col-lg-6"> 
            <div className="register-form">
                <div className="row">
                    {inputs.map(input =>
                        <InputText key={input.name} {...input} isWide={false} inputChangeHandler={inputChangeHandler} />
                    )}
                    <SubmitButton />
                </div>
            </div>
        </div>
    );
}