import { Link } from "react-router-dom";

export default function Image({product}) {
    return (
        <Link to={`/product/${[product.id]}`}>
            <div className="img">
                <img src={product.images[0].url} alt="Product" />
                <p>{product.name}</p>
            </div>
        </Link>
    );
}