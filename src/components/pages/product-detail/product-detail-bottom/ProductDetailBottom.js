import { useState, useEffect } from "react";

import Description from "./description/Description";
import NavPills from "./nav-pills/NavPills";
import Reviews from "./reviews/Reviews";
import Specification from "./specification/Specification";

import * as reviewService from '../../../../services/reviewService';

export default function ProductDetailBottom({product}) {
    const [specifications, setSpecifications] = useState(null)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (product.id)
        reviewService.getAllProductReviews(product.id)
            .then(reviews => setReviews(reviews.sort((a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc))))
            .catch(error => console.log("Can't fetch reviews"));
    }, [product.id])

    useEffect(() => {
        setSpecifications({
            processor: product.processor,
            ram: product.ram,
            gpu: product.gpu,
            storage: product.storage,
            display: product.display
        })
    }, [product.id])

    return (
        <div className="row product-detail-bottom">
            <div className="col-lg-12">
                <NavPills reviewsCount={reviews.length} />

                <div className="tab-content">
                    <Description description={product.description} />
                    {specifications && <Specification specifications={specifications} />}
                    <Reviews productId={product.id} reviews={reviews} setReviews={setReviews} />
                </div>
            </div>
    </div>
    );
}