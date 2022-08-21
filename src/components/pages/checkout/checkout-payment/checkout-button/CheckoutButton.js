export default function CheckoutButton({children}) {
    return (
        <div className="checkout-btn">
            <button type="submit">{children}</button>
        </div>
    );
}