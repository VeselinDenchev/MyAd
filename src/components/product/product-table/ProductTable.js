import TableRow from '../product-table/table-row/TableRow';

export default function ProductTable() {
    const productImages = 
    [
        'img/product-1.jpg',
        'img/product-2.jpg',
        'img/product-3.jpg',
        'img/product-4.jpg',
        'img/product-5.jpg',
    ];

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
                    {productImages.map(image =>
                        <TableRow key={image} image={image} />
                    )}
                </tbody>
            </table>
        </div>
    );
}