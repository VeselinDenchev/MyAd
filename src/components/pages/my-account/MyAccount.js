import NavPills from "./nav-pills/NavPills";
import TabContent from "./tab-content/TabContent";

export default function MyAccount() {
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