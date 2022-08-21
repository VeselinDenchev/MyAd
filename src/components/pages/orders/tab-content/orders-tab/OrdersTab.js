import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../../../../contexts/OrderContext";
import Order from "./order/Order";

export default function OrdersTab() {
    const { orders } = useContext(OrderContext);

    return (
        <div className="tab-pane fade show active" id="orders-tab" role="tabpanel" aria-labelledby="orders-nav">
            {
                orders.length === 0 
                ?   <div style={{textAlign: 'center'}}>
                        <h1>No orders have been made by this user</h1>
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
                : 
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {orders.map(order =>
                                <Order key={order.id} order={order} />
                            )}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
}