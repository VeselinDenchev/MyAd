import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { CartContext } from "../../../contexts/CartContext";
import { UserContext } from "../../../contexts/UserContext";

import ProductTable from "../../product/product-table/ProductTable";
import PreCheckout from "./pre-checkout/PreCheckout";

export default function Cart() {
    const { user } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.accessToken) {
           navigate('/login'); 
        }
    }, []);

    return (
        <div className="cart-page">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-lg-${cart.length > 0 ? 8 : 12}`}>
                        <div className="cart-page-inner">
                            {
                                cart.length > 0 
                                ?   <ProductTable cart={cart} /> 
                                :   <div style={{textAlign: 'center'}}>
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
                    {cart.length > 0 && <PreCheckout />}
                </div>
            </div>
        </div>
    );
}