import { Link } from "react-router-dom";

export default function Order({order}) {

    return (
        <tr>
            <td>{order.createdAtString}</td>
            <td>${order.grandTotal}</td>
            <td>{order.status}</td>
            <td>
                <Link to={`/order/${order.id}`}>
                    <button className="btn">View</button>
                </Link>
            </td>
        </tr>
    );
}