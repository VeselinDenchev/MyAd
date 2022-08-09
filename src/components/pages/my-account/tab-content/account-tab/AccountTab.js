import AccountDetails from "./account-details/AccountDetails";
import PasswordChange from "./password-change/PasswordChange";

export default function AccountTab() {
    return (
        <div className="tab-pane fade" id="account-tab" role="tabpanel" aria-labelledby="account-nav">
            <AccountDetails />
            <hr />
            <PasswordChange />
        </div>
    );
}