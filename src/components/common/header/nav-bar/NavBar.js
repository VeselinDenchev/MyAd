import { Link } from 'react-router-dom';

import AuthNav from "./auth-nav/AuthNav";
import MainNav from "./main-nav/MainNav";

export default function NavBar() {
    return (
        <div className="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link to="/" className="navbar-brand">MENU</Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <MainNav />
                        <AuthNav  />
                    </div>
                </nav>
            </div>
        </div>
    );
}