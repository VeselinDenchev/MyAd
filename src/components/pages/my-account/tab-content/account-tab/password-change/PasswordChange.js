import { useState } from "react";

import InputText from "../../../../../input-text/InputText";
import UpdateButton from "../update-button/UpdateButton";

export default function PasswordChange() {
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const inputChangeHandler = (event) => setPasswordForm({...passwordForm, [event.target.name]: event.target.value});
    
    const passwords = 
    [
        {name: 'currentPassword', label: 'Current Password', value: passwordForm.currentPassword, isWide: true},
        {name: 'newPassword', label: 'New Password', value: passwordForm.newPassword, isWide: false},
        {name: 'confirmPassword', label: 'Confirm Password', value: passwordForm.confirmPassword, isWide: false}
    ];

    return (
        <>
            <h4>Password change</h4>
            <div className="row">
                {passwords.map(password =>
                    <InputText key={password.name} {...{...password, type: 'password', inputChangeHandler: inputChangeHandler}} />
                )}
                <UpdateButton text="Save Changes" />
            </div>
        </>
    );
}