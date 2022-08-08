import { useState } from "react";
import Rating from "../../../../product/rating/Rating";

export default function Reviews() {
    const [reviewForm, setReviewForm] = useState({
        name: '',
        email: '',
        review: ''
    });

    const reviewFormChangeHandler = (event) => setReviewForm(reviewForm => ({...reviewForm, [event.target.name]: event.target.value}));

    return (
        <div id="reviews" className="container tab-pane fade">
            <div className="reviews-submitted">
                <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                <Rating />
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
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