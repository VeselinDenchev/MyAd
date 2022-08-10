import { useState } from "react";
import InputCheckbox from "../../../inputs/input-checkbox/InputCheckbox";
import InputText from "../../../inputs/input-text/InputText";
import SubmitButton from "../submit-button/SubmitButton";

export default function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        emailOrUsername: '',
        password: '',
        willBeKeptSignedIn: false
    });

    const inputs = 
    [
        {name: 'emailOrUsername',  label: 'E-mail / Username', value: loginForm.emailOrUsername, type: 'text'},
        {name: 'password', label: 'Password', value: loginForm.password, type: 'password'}
    ];

    const checkbox = {name: 'willBeKeptSignedIn', label: 'Keep me signed in'};

    const inputChangeHandler = (event) => setLoginForm({...loginForm, [event.target.name]: event.target.value});

    return (
        <div className="col-lg-6">
            <div className="login-form">
                <div className="row">
                    {inputs.map(input =>
                        <InputText key={input.name} {...input} isWide={false} inputChangeHandler={inputChangeHandler} />
                    )}
                    <InputCheckbox form={loginForm} setForm={setLoginForm} checkbox={checkbox} />
                    <SubmitButton />
                </div>
            </div>
        </div>
);
}