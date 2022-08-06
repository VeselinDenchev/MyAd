import Rating from "../../../product/rating/Rating";

export default function ReviewItem({imageSource}) {
    return (
        <div className="col-md-6">
            <div className="review-slider-item">
                <div className="review-img">
                    <img src={imageSource} alt="Image" />
                </div>
                <div className="review-text">
                    <h2>Customer Name</h2>
                    <h3>Profession</h3>
                    <Rating />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                    </p>
                </div>
            </div>
        </div>
    );
}