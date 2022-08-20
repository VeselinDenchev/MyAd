export default function UpdateButton({disabled, children}) {
    return (
        <div className="col-md-12">
            <button disabled={disabled} className="btn">{children}</button>
            <br/>
        </div>
    );
}