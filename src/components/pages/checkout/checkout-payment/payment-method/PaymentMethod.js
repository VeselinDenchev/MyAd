export default function PaymentMethod({id, name, isChecked, radioButtonCheckedHandler}) {
    return (
        <div className="payment-method">
            <div className="custom-control custom-radio">
                <input 
                    type="radio" 
                    checked={isChecked} 
                    onChange={() => radioButtonCheckedHandler(id)} 
                    className="custom-control-input" 
                    id={id} 
                    name="payment" 
                />
                <label className="custom-control-label" htmlFor={id}>{name}</label>
            </div>
            {/* <div className="payment-content" id={`${id}-show`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.
                </p>
            </div> */}
        </div>
    );
}