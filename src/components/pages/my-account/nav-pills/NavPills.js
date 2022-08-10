import { NavLink } from 'react-router-dom';

export default function NavPills() {
    return (
        <div className="col-md-3">
            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="dashboard-nav" data-toggle="pill" href="#dashboard-tab" role="tab">
                    <i className="fa fa-tachometer-alt" />
                    <div>Dashboard</div>
                </a>
                <a className="nav-link" id="orders-nav" data-toggle="pill" href="#orders-tab" role="tab">
                    <i className="fa fa-shopping-bag" />
                    <div>Orders</div>
                </a>
                <a className="nav-link" id="payment-nav" data-toggle="pill" href="#payment-tab" role="tab">
                    <i className="fa fa-credit-card" />
                    <div>Payment Method</div>
                </a>
                <a className="nav-link" id="address-nav" data-toggle="pill" href="#address-tab" role="tab">
                    <i className="fa fa-map-marker-alt" />
                    <div>Address</div>
                </a>
                <a className="nav-link" id="account-nav" data-toggle="pill" href="#account-tab" role="tab">
                    <i className="fa fa-user" />
                    <div>Account Details</div>
                </a>
                <NavLink className="nav-link" to="/">
                    <i className="fa fa-sign-out-alt" />
                    <div>Logout</div>
                </NavLink>
            </div>
        </div>
    );
}