export default function Price({price}) {
    return (
        <div className="price">
            <h4>Price:</h4>
            {/* <p>$99 <span>$149</span></p> */}
            <p>${price}</p>
        </div>
    );
}