import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import NavPills from "./nav-pills/NavPills";
import TabContent from "./tab-content/TabContent";

export default function MyAccount() {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.email) {
            navigate('/login');
        }
    }, [])

    return (
        <div className="my-account">
            <div className="container-fluid">
                <div className="row">
                    <NavPills />
                    <TabContent />
                </div>
            </div>
        </div>
    );
}