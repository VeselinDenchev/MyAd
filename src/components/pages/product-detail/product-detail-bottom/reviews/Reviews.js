import { useState } from "react";
import Rating from "../../../../product/rating/Rating";

export default function Reviews({reviews}) {
    console.log(reviews);
    const [reviewForm, setReviewForm] = useState({
        name: '',
        email: '',
        review: ''
    });

    const reviewFormChangeHandler = (event) => setReviewForm(reviewForm => ({...reviewForm, [event.target.name]: event.target.value}));

    return (
        <div id="reviews" className="container tab-pane fade">
            <div className="reviews-submitted">
                {reviews.map(review =>
                <div key={review.id}>
                    <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                    <Rating rating={review.rating} />
                    <p>
                        {review.comment}
                    </p>
                </div>

                )}

                <button className="btn" type="button">Edit</button>
            </div>
            <div className="reviews-submit">
                <h4>Give your Review:</h4>
                <Rating />
                <form className="row form">
                    <div className="col-sm-6">
                        <input type="text" name="name" value={reviewForm.name} onChange={reviewFormChangeHandler} placeholder="Name" />
                    </div>
                    <div className="col-sm-6">
                        <input type="email" name="email" value={reviewForm.email} onChange={reviewFormChangeHandler} placeholder="Email" />
                    </div>
                    <div className="col-sm-12">
                        <textarea name="review" value={reviewForm.review} onChange={reviewFormChangeHandler} placeholder="Review"></textarea>
                    </div>
                    <div className="col-sm-12">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}