export default function InputText({name, label, value, type, inputChangeHandler, blurChangeHandler}) {
    return (
        <>
                    <label htmlFor={name}>{label}</label>
                <input 
                    id={name} 
                    name={name}
                    value={value}
                    type={type}
                    onChange={inputChangeHandler}
                    onBlur={blurChangeHandler}
                    className="form-control" 
                    placeholder={label}
                />
        </>
    );
}