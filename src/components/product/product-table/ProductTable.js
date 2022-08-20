import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { ProductContext } from '../../../contexts/ProductContext';

import TableRow from '../product-table/table-row/TableRow';

export default function ProductTable({cart}) {
    const { products } = useContext(ProductContext);
    const {setCart, removeFromCart, clearCart} = useContext(CartContext);

    const productImages = 
    [
        'img/product-1.jpg',
        'img/product-2.jpg',
        'img/product-3.jpg',
        'img/product-4.jpg',
        'img/product-5.jpg',
    ];

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
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {products.length > 0 && cart.length > 0 && cart.map(cartItem =>
                    <tr key={cartItem.productId}>
                        <TableRow product={getProductById(cartItem.productId)} quantity={cartItem.quantity} />
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}