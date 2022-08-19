import { useState } from "react";

export default function NavPills() {
    const [reviewsCount, setReviewsCount] = useState(1);
    
    return (
        <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#specification">Specifications</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#reviews">Reviews ({reviewsCount})</a>
            </li>
        </ul>
    );
}