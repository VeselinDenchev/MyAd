export default function ContactInputText({name, value, label, inputChangeHandler}) {
    return (
        <div className="col-md-6">
            <input 
                type="text" 
                name={name} 
                value={value} 
                className="form-control" 
                onChange={inputChangeHandler} 
                placeholder={label} 
            />
        </div>
    );
}