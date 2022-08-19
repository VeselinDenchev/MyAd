export default function SubmitButton({children}) {
    return (
        <div className="col-md-12" style={{textAlign: 'center'}}>
            <button type="submit" className="btn">{children}</button>
        </div>
    );
}