export default function FeatureItem({feature}) {
    return (
        <div className="col-lg-3 col-md-6 feature-col">
            <div className="feature-content">
                <i className="fab fa-cc-mastercard"></i>
                <h2>{feature}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur elit
                </p>
            </div>
        </div>
    );
}