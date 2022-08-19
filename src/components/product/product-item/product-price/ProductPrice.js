export default function ProductPrice({price}) {
    return (
        <div className="product-price">
            <h3><span>$</span>{price}</h3>
            <button className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</button>
        </div>
    );
}