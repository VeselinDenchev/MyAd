import AccountTab from "./account-tab/AccountTab";
import AddressTab from "./address-tab/AddressTab";
import DashboardTab from "./dashboard-tab/DashboardTab";
import OrdersTab from "./orders-tab/OrdersTab";
import PaymentTab from "./payment-tab/PaymenTab";

export default function TabContent() {
    return (
        <div className="col-md-12">
            <div className="tab-content">
                <OrdersTab />
                {/* <AccountTab /> */}
            </div>
    </div>
    );
}