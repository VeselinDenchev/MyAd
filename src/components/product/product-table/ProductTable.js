import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';

import TableRow from '../product-table/table-row/TableRow';

export default function ProductTable({cart}) {
    const { products } = useContext(ProductContext);

    const location = useLocation();

    const getProductById = (productId) => [...products.filter(p => p.id === productId)][0];

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        {location.pathname === '/cart' && <th>Remove</th>}
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {cart && cart.length > 0 && cart.map(cartItem =>
                    <tr key={cartItem.productId}>
                        <TableRow product={getProductById(cartItem.productId)} quantity={cartItem.quantity} />
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}