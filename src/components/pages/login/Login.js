import LoginForm from "./login-form/LoginForm";
import RegisterForm from "../register/register-form/RegisterForm";

export default function Login() {
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}