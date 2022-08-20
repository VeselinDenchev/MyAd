import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { OrderContext } from "../../../contexts/OrderContext";
import { ProductContext } from "../../../contexts/ProductContext";
import ProductTable from "../../product/product-table/ProductTable";
import TableRow from "../../product/product-table/table-row/TableRow";
import CartSummary from "../cart/pre-checkout/cart-summary/CartSummary";
import PreCheckout from "../cart/pre-checkout/PreCheckout";
import CheckoutSummary from "../checkout/checkout-summary/CheckoutSummary";

export default function OrderView() {
    const { orderId } = useParams();

    const { getOrderById } = useContext(OrderContext);
    const { getProductById } = useContext(ProductContext);

    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder(getOrderById(orderId));
    }, [])

    return (
        <div className="cart-page">
            <div className="container-fluid">
                    {order &&  
                    <>
                        <div className="col-lg-12">
                            <div className="cart-page-inner">
                                <ProductTable cart={order.cartItems} />
                            </div>
                        </div>
                        <CartSummary />
                    </>
                    }
            </div>
        </div>
    );
}