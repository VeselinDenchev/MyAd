import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="col-md-3">
            <div className="logo">
                <Link to="index.html">
                    <img src="img/logo.png" alt="Logo" />
                </Link>
            </div>
        </div>
    );
}