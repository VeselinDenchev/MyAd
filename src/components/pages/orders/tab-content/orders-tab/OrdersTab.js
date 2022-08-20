import { useContext } from "react";
import { OrderContext } from "../../../../../contexts/OrderContext";
import Order from "./order/Order";

export default function OrdersTab() {
    const { orders } = useContext(OrderContext);

    return (
        <div className="tab-pane fade show active" id="orders-tab" role="tabpanel" aria-labelledby="orders-nav">
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
        </div>
    );
}