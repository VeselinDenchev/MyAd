import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";

export default function Login() {
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <RegisterForm />
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}