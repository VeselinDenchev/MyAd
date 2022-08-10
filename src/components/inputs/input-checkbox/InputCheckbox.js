export default function InputCheckbox({form, setForm, checkbox}) {
    const checkboxChangeHandler = (event) => 
                                    setForm(form => ({...form, [event.target.name]: event.target.checked}));

    return (
        <div className="col-md-12">
            <div className="custom-control custom-checkbox">
                <input 
                    type="checkbox"
                    className="custom-control-input"
                    name={checkbox.name}
                    value={form[checkbox.name]}
                    onChange={checkboxChangeHandler}
                    id={checkbox.name}
                />
                <label className="custom-control-label" htmlFor={checkbox.name}>{checkbox.label}</label>
            </div>
        </div>
    );
}