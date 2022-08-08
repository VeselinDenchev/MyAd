export default function PaymentItem(props) {
    return (
        <div className="col-md-6">
            <div className={props.paymentClassName}>
                <h2>{props.heading}</h2>
                {props.children}
            </div>
        </div>
    );
}