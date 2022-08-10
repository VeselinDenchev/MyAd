import ProductTable from "../../product/product-table/ProductTable";
import PreCheckout from "./pre-checkout/PreCheckout";

export default function Cart() {
    return (
        <div className="cart-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-page-inner">
                            <ProductTable />
                        </div>
                    </div>
                    <PreCheckout />
                </div>
            </div>
        </div>
    );
}