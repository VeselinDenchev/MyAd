export default function InputCheckbox({checkoutForm, setCheckoutForm, checkbox}) {
    const checkboxChangeHandler = (event) => 
                                    setCheckoutForm(checkoutForm => ({...checkoutForm, [event.target.name]: event.target.checked}));

    return (
        <div className="col-md-12">
            <div className="custom-control custom-checkbox">
                <input 
                    type="checkbox"
                    className="custom-control-input"
                    name={checkbox.name}
                    value={checkoutForm.willCreateAccount}
                    onChange={checkboxChangeHandler}
                    id={checkbox.name}
                />
                <label className="custom-control-label" htmlFor={checkbox.name}>{checkbox.label}</label>
            </div>
        </div>
    );
}