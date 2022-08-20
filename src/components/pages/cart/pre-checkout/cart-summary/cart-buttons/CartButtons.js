import { Link } from "react-router-dom";

export default function CartButtons() {
    return (
        <Link to='/checkout'>
            <div className="cart-btn" style={{textAlign: 'center'}}>
                <button className="btn-lg">Checkout</button>
            </div>
        </Link>
    );
}