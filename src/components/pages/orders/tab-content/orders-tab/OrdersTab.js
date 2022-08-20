import Order from "./order/Order";

export default function OrdersTab() {
    const orderNumbers = [1, 2, 3]

    return (
        <div className="tab-pane fade show active" id="orders-tab" role="tabpanel" aria-labelledby="orders-nav">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orderNumbers.map(number =>
                        <Order key={number} number={number} />
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}