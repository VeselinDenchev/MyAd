import { useEffect } from "react";

export default function Rating({ rating }) {
    const keys = [...Array(rating).keys()];


    return (
        <div className="ratting">
            {keys.map(key => 
                <i key={key} className="fa fa-star" />
            )}
        </div>
    );
}