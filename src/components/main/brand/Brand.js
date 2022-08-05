import BrandItem from "./brand-item/BrandItem";

export default function Brand() {
    const brandImages = 
    [
        'img/brand-1.png',
        'img/brand-2.png',
        'img/brand-3.png',
        'img/brand-4.png',
        'img/brand-5.png',
        'img/brand-6.png',
    ];

    return (
        <div className="brand">
            <div className="container-fluid">
                <div className="brand-slider">
                    {brandImages.map(imageSource =>
                        <BrandItem key={imageSource} image={imageSource} />
                    )}
                </div>
            </div>
        </div>
    );
}