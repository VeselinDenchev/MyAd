import { Link } from "react-router-dom";

export default function Image({image}) {
    return (
        <div className="img">
            <Link to="/"><img src={image} alt="Product" /></Link>
            <p>Product Name</p>
        </div>
    );
}