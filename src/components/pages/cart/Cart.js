import CartPageTable from "./cart-page-table/CartPageTable";
import PreCheckout from "./pre-checkout/PreCheckout";

export default function Cart() {
    return (
        <div className="cart-page">
            <div className="container-fluid">
                <div className="row">
                    <CartPageTable />
                    <PreCheckout />
                </div>
            </div>
        </div>
    );
}