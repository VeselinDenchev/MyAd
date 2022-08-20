import Address from "./address/Address";

export default function AddressTab() {
    const addresses = 
    [
        {addressType: 'Payment Address', street: 'Payment'},
        {addressType: 'Shipping Address', street: 'Shipping'}
    ];

    return (
        <div className="tab-pane fade" id="address-tab" role="tabpanel" aria-labelledby="address-nav">
            <h4>Address</h4>
            <div className="row">
                {addresses.map(address =>
                    <Address key={address.street} {...address} />
                )}
            </div>
        </div>
    );
}