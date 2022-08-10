import AddressForm from "../address-form/AddressForm";
import InputCheckbox from "../../../inputs/input-checkbox/InputCheckbox";

export default function BillingAddress({checkoutForm, setCheckoutForm}) {
    const checkboxes = 
    [
        {name: 'willCreateAccount', label: 'Create an account'},
        {name: 'willShipToDifferenAddress', label: 'Ship to different address'}
    ];

    return (
        <div className="billing-address">
            <h2>Billing Address</h2>
            <div className="row">
                <AddressForm setCheckoutForm={setCheckoutForm} outerAddressForm={checkoutForm.billingAddress} />
                {checkboxes.map(checkbox =>
                    <InputCheckbox key={checkbox.name} form={checkoutForm} setForm={setCheckoutForm} checkbox={checkbox} />
                )}
            </div>
        </div>
    );
}