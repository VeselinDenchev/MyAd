import FeatureItem from "./feature-item/FeatureItem";

export default function Feature() {
    const features = 
    [
        'Secure Payment',
        'Worldwide Delivery',
        '90 Days Return',
        '24/7 Support'
    ]

    return (
        <div className="feature">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {features.map(feature =>
                        <FeatureItem key={feature} feature={feature} />
                    )}
                </div>
            </div>
        </div>
    );
}