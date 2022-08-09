import { useState } from "react";

export default function Coupon() {
    const [couponCode, setCouponCode] = useState('');

    const couponCodeChangeHandler = (event) => setCouponCode(event.target.value);

    return (
        <div className="col-md-12">
            <div className="coupon">
                <input type="text" value={couponCode} onChange={couponCodeChangeHandler} placeholder="Coupon Code" />
                <button>Apply Code</button>
            </div>
        </div>
    );
}