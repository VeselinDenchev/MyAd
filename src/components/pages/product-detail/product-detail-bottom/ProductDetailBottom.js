import { useState, useEffect } from "react";
import Description from "./description/Description";
import NavPills from "./nav-pills/NavPills";
import Reviews from "./reviews/Reviews";
import Specification from "./specification/Specification";

export default function ProductDetailBottom({product}) {
    const [specifications, setSpecifications] = useState(null)

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
                {/* <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                    </li>
                </ul> */}
                <NavPills />

                <div className="tab-content">
                    <Description description={product.description} />
                    {specifications && <Specification specifications={specifications} />}
                    {/* <Reviews reviews={product.reviews} /> */}
                </div>
            </div>
    </div>
    );
}