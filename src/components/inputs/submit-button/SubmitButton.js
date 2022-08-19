export default function SubmitButton({children, disabled}) {
    return (
        <div className="col-md-12" style={{textAlign: 'center'}}>
            <button type="submit" className="btn" disabled={children === 'Register' ? disabled : false}>{children}</button>
        </div>
    );
}