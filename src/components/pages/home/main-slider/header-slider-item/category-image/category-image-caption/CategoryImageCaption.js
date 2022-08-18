import { Link } from "react-router-dom";

export default function CategoryImageCaption({caption}) {
    return (
        <Link className="img-text" to={`/products?categoryName=${caption.includes('gaming') ? 'Gaming+Laptops' : 'Business+Laptops'}`}>
            <p>{caption}</p>
        </Link>
    );
}