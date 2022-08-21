import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

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

    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder(getOrderById(orderId));
    }, [])

    return (
        <div className="cart-page">
            <div className="container-fluid">
                    {order.length !== 0 
                        ?  
                            <>
                                <div className="col-lg-12">
                                    <div className="cart-page-inner">
                                        <ProductTable cart={order.cartItems} />
                                    </div>
                                </div>
                                <CartSummary />
                            </>
                        :
                            <div style={{textAlign: 'center'}}>
                                    <h1>No products added to cart</h1>
                                    <Link to='/products'>
                                        <button 
                                            className="btn" 
                                            type="button" 
                                            style={{marginTop: '20vh', fontSize: '15pt', fontWeight: 'bold'}}
                                        >
                                            Go shopping
                                        </button>
                                    </Link>
                                </div>
                    }
            </div>
        </div>
    );
}