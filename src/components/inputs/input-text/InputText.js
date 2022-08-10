export default function InputText({name, label, value, type, inputChangeHandler, isWide}) {
    return (
        <div className={`col-md-${isWide ? '12' : '6'}`}>
            <label htmlFor={name}>{label}</label>
            <input 
                id={name} 
                name={name}
                value={value}
                type={type}
                onChange={inputChangeHandler}
                className="form-control" 
                placeholder={label}
            />
        </div>
    );
}