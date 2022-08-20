import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../../../../contexts/UserContext';

export default function NavPills() {
    const { userLogout } = useContext(UserContext);

    const navigate = useNavigate();

    function logoutClickHandler(event) {
        event.preventDefault();

        userLogout();
        navigate('/');
    }

    return (
        <div className="col-md-3">
            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="account-nav" data-toggle="pill" href="#account-tab" role="tab">
                    <i className="fa fa-user" />
                    {/* <div>Account Details</div> */}
                    <div>Change Password</div>
                </a>
                <a className="nav-link" id="orders-nav" data-toggle="pill" href="#orders-tab" role="tab">
                    <i className="fa fa-shopping-bag" />
                    <div>Orders</div>
                </a>
            </div>
        </div>
    );
}