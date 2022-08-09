export default function InputText({name, label, value, inputChangeHandler, isWide}) {
    return (
        <div className={`col-md-${isWide ? '12' : '6'}`}>
            <label htmlFor={name}>{label}</label>
            <input 
                id={name} 
                name={name}
                value={value}
                onChange={inputChangeHandler}
                className="form-control" 
                type="text" 
                placeholder={label}
            />
        </div>
    );
}