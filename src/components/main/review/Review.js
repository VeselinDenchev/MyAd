import ReviewItem from "./review-item/ReviewItem";


export default function Review() {
    const reviewImages = 
    [
        "img/review-1.jpg",
        "img/review-2.jpg",
        "img/review-3.jpg",
    ];

    return (
        <div class="review">
            <div class="container-fluid">
                <div class="row align-items-center review-slider normal-slider">
                    {reviewImages.map(imageSource =>
                        <ReviewItem imageSource={imageSource} />
                    )}
                </div>
            </div>
        </div>
    );
}