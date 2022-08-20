import { useState } from "react";
import InputCheckbox from "../../../inputs/input-checkbox/InputCheckbox";
import InputText from "../../../inputs/input-text/InputText";
import SubmitButton from "../../../inputs/submit-button/SubmitButton";

import * as userService from '../../../../services/userService';
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const { userLogin } = useContext(UserContext); 

    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const [isValidUserData, setIsValidUserData] = useState(true);

    const inputs = 
    [
        {name: 'email',  label: 'E-mail / Username', value: loginForm.email, type: 'text'},
        {name: 'password', label: 'Password', value: loginForm.password, type: 'password'}
    ];

    const inputChangeHandler = (event) => setLoginForm({...loginForm, [event.target.name]: event.target.value});
    
    const inputClickHandler = () => setIsValidUserData(true);

    function loginSubmitHandler(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', loginForm.email);
        formData.append('password', loginForm.password)

        userService.login(formData)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setIsValidUserData(false);
            });
    }

    return (
        <form className="col-lg-4" style={{margin: '0 auto'}} onSubmit={loginSubmitHandler}>
            <div className="login-form">
                    {inputs.map(input =>
                        <div key={input.name} className="row">
                            <InputText {...input} isWide={true} inputChangeHandler={inputChangeHandler} inputClickHandler={inputClickHandler} />
                        </div>
                    )}
                    {/* <InputCheckbox form={loginForm} setForm={setLoginForm} checkbox={checkbox} /> */}
                    <div className="row">
                        <SubmitButton>Login</SubmitButton>
                    </div>
                    {
                        !isValidUserData &&
                        <div className="row">
                            <div className="text-danger" style={{marginLeft: '1em'}}>Invalid email or password</div>
                        </div>
                    }
            </div>
        </form>

);
}