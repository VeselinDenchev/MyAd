export default function Address({addressTypeHeading, street}) {
    return (
        <div className="col-md-6">
            <h5>{addressTypeHeading}</h5>
            <p>123 {street} Street, Los Angeles, CA</p>
            <p>Mobile: 012-345-6789</p>
            <button className="btn">Edit Address</button>
        </div>
    );
}