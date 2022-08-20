import { useLayoutEffect } from "react";
import { useState } from "react";

import InputText from "../../../../../inputs/input-text/InputText";
import UpdateButton from "../update-button/UpdateButton";

export default function PasswordChange() {
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const [isTooShort, setIsTooShort] = useState(false);

    useLayoutEffect(() => {
        if (passwordForm.newPassword > 3 && passwordForm.newPassword === passwordForm.confirmPassword) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }, [passwordForm])

    function inputChangeHandler(event) {
        setPasswordForm({...passwordForm, [event.target.name]: event.target.value});
    }


    function blurHandler(event) {
        if (event.target.value.length < 3) {
            setIsTooShort(true);
        }
        else {
            setIsTooShort(false);
        }
    }
    
    const passwords = 
    [
        {name: 'currentPassword', label: 'Current Password', value: passwordForm.currentPassword, isWide: true},
        {name: 'newPassword', label: 'New Password', value: passwordForm.newPassword, isWide: false},
        {name: 'confirmPassword', label: 'Confirm Password', value: passwordForm.confirmPassword, isWide: false}
    ];

    return (
        <>
            <h4>Password change</h4>
            <form className="row">
                {passwords.map(password =>
                <div key={password.name} className="col-md-6">
                    <InputText {...password} type='password' inputChangeHandler={inputChangeHandler} blurChangeHandler={blurHandler} />
                </div>
                )}
                {isTooShort && <div className="text-danger" style={{marginBottom: '1em', marginLeft: '1em'}}>Password must be at least 3 characters long</div>}
                <UpdateButton disabled={isDisabled}>Save Changes</UpdateButton>
            </form>
        </>
    );
}