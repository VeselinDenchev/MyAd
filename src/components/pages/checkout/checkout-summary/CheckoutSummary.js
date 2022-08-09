export default function CheckoutSummary() {
    return (
        <div className="checkout-summary">
            <h1>Cart Total</h1>
            <p>Product Name<span>$99</span></p>
            <p className="sub-total">Sub Total<span>$99</span></p>
            <p className="ship-cost">Shipping Cost<span>$1</span></p>
            <h2>Grand Total<span>$100</span></h2>
        </div>
    );
}