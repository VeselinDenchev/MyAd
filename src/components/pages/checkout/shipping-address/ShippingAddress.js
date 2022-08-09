import AddressForm from "../address-form/AddressForm";

export default function ShippingAddress({checkoutForm, setCheckoutForm}) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
            <div className="row">
                <AddressForm setCheckoutForm={setCheckoutForm} outerAddressForm={checkoutForm.shippingAddress} />
            </div>
        </div>
    );
}