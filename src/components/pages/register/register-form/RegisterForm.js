import { useContext, Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";

import * as userService from '../../../../services/userService'

import InputText from "../../../inputs/input-text/InputText";
import SubmitButton from "../../../inputs/submit-button/SubmitButton";

export default function RegisterForm() {
    const navigate = useNavigate();

    const [userEmails, setUserEmails] = useState([]);

    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        password: '',
        retypePassword: '',
    });
    
    const [errors, setErrors] = useState({});

    const [userExist, setUserExist] = useState(false);

    useEffect(() => {
        userService.getUserEmails()
            .then(emails => setUserEmails(emails));
    }, [])

    const isError = Object.values(errors).some(e => e === true);
    const isEmptyInput = Object.values(registerForm).some(i => i === '');
    
    const inputs = 
    [
        {name: 'firstName',  label: 'First Name', value: registerForm.firstName, type: 'text'},
        {name: 'lastName', label: 'Last Name', value: registerForm.lastName, type: 'text'},
        {name: 'email', label: 'E-mail', value: registerForm.email, type: 'email'},
        {name: 'mobileNumber', label: 'Mobile No', value: registerForm.mobileNumber, type: 'tel'},
        {name: 'address', label: 'Address', value: registerForm.address, type: 'text'},
        {name: 'password', label: 'Password', value: registerForm.password, type: 'password'},
        {name: 'retypePassword', label: 'Retype Password', value: registerForm.retypePassword, type: 'password'}
    ];

    function inputChangeHandler(event) {
        setRegisterForm({...registerForm, [event.target.name]: event.target.value});
    }

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: registerForm[e.target.name].length < bound,
        }));
    }

    function emailBlurHandler(event) {
        if (userEmails.some(e => e === event.target.value)) {
            setErrors({...errors, email: true});
            setUserExist(true);
        }
        else {
            if (event.target.value.length > 3) {
                setErrors({...errors, email: undefined});
            }
            else {
                setErrors({...errors, email: true});
            }

            setUserExist(false);
        }
    }

    function registerSubmitHandler(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('firstName', registerForm.firstName);
        formData.append('lastName', registerForm.lastName);
        formData.append('email', registerForm.email);
        formData.append('phoneNumber', registerForm.mobileNumber);
        formData.append('address', registerForm.address);
        formData.append('password', registerForm.password);

        userService.register(formData)
            .then(navigate('/login'))
            .catch(error => console.log(error));

        setUserEmails([...userEmails, registerForm.email]);
    }

    return (
        <div className="col-lg-6" style={{margin: '0 auto'}}> 
            <form onSubmit={registerSubmitHandler} className="register-form">
                    {inputs.map(input =>
                    <div key={input.name} style={{marginBottom: "2em"}}>
                        <InputText 
                            {...input} 
                            isWide={true} 
                            inputChangeHandler={inputChangeHandler}
                            blurChangeHandler={input.name !== 'email' ? (e => minLength(e, 3)) : emailBlurHandler}
                        />
                        {errors[input.name] 
                        ? (input.name === 'email' && userExist) ? <div className="text-danger" style={{marginLeft: '1em'}}>User with such email already exists</div> 
                                    :<div className="text-danger" style={{marginLeft: '1em'}}>{input.label} must be longer than 3 characters</div>
                        : ''}
                    </div>
                    )}
                <div className="row">
                    <SubmitButton disabled={isError || isEmptyInput}>Register</SubmitButton>
                </div>
            </form>
        </div>
    );
}