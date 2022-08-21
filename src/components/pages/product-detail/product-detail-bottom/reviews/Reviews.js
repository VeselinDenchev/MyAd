import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { OrderContext } from "../../../../../contexts/OrderContext";
import { UserContext } from "../../../../../contexts/UserContext";

import * as reviewService from "../../../../../services/reviewService";

import Rating from "../../../../product/rating/Rating";

export default function Reviews({productId, reviews, setReviews}) {
    const { user } = useContext(UserContext);
    const { orders, hasBoughtProduct } = useContext(OrderContext);
    const [canLeaveReview, setCanLeaveReview] = useState(false);
    const [hasLeftReview, setHasLeftReview] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);

    const [reviewForm, setReviewForm] = useState({
        rating: 1,
        comment: ''
    });

    useEffect(() => {
        setHasLeftReview(reviews.some( r => r.user.id === user.id));
    }, [user?.accessToken, orders, reviews])

    useEffect(() => {
        if (!hasLeftReview && hasBoughtProduct(productId)) {
            setCanLeaveReview(true);
            console.log("has bought product")
        }
        else if (hasLeftReview) {
            setCanLeaveReview(false);
        }
    }, [hasLeftReview, orders.length]);

    useEffect(() => {
        if (isEditClicked) {
            const reviewToEdit = [...reviews.filter(r => r.user.id === user.id)][0];
            console.log(reviewToEdit);

            setReviewForm({
                rating: reviewToEdit.rating,
                comment: reviewToEdit.comment
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        console.log("Has bought product: " + hasBoughtProduct(productId));
        console.log("Has left review: " + hasLeftReview);
        console.log("Can leave review: " + canLeaveReview);
    }, [canLeaveReview, hasLeftReview]);

    const editClickHandler = () => setIsEditClicked(true);

    const commentChangeHandler = (event) => setReviewForm(reviewForm => ({...reviewForm, comment: event.target.value}));

    function ratingChangeHandler(event) {
        if (event.target.value < 1 || event.target.value > 5) return;

        setReviewForm({...reviewForm, rating: event.target.value})
    }

    function reviewSubmitHandler(event, type, reviewId = null) {
        event.preventDefault();

        const reviewFormData = new FormData();
        reviewFormData.append('rating', reviewForm.rating);
        reviewFormData.append('comment', reviewForm.comment);

        if (type === 'add') {
            reviewService.addReview(productId, reviewFormData, user.accessToken)
            .then(newReview => 
                setReviews([...reviews, newReview].sort(((a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc)))))
            .catch(error => console.log(error));

            setHasLeftReview(true);
        }
        else if (type === 'update') {
            reviewService.updateReview(reviewId, reviewFormData, user.accessToken)
                .then(newReview => {
                    setReviews([...reviews.filter(r => r.id !== reviewId), newReview].sort(((a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc))));
                    setIsEditClicked(false);
                })
                    
                .catch(error => console.log(error));

                
        }
    }

    function deleteReviewClickHandler(reviewId) {
        reviewService.deleteReview(reviewId, user.accessToken)
            .then(newReview => 
                setReviews([...reviews.filter(r => r.id !== reviewId)].sort(((a, b) => new Date(b.createdAtUtc) - new Date(a.createdAtUtc)))))
            .catch(error => console.log(error));

            setReviewForm({
                rating: 1,
                comment: ''
            });

            setHasLeftReview(false);
    }

    return (
        <div id="reviews" className="container tab-pane fade">
            <div className="reviews-submitted">
                {
                    reviews.length === 0 &&
                    <h3>No reviews for this product has been left yet</h3>
                }
                {reviews.map(review =>
                    user && review.user.id === user.id && isEditClicked
                    ?
                        <div key={review.id} className="reviews-submit">
                            <h4>Give your Review:</h4>
                            <form onSubmit={e => reviewSubmitHandler(e, 'update', review.id)} className="row form">
                                <div className="col-sm-6">
                                    <label htmlFor="rating">Rating</label>
                                    <input type="number" name="rating" value={reviewForm.rating} onChange={ratingChangeHandler} placeholder="Rating" />
                                </div>
                                <div className="col-sm-12">
                                    <textarea name="comment" value={reviewForm.comment} onChange={commentChangeHandler} placeholder="Comment"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    :
                    <div key={review.id}>
                        <div className="reviewer">
                            {`${review.user.firstName} ${review.user.lastName}`}
                            &nbsp;&nbsp;
                            <span>{review.madeOnDate}</span>
                            {
                                user && review.user.id === user.id && 
                                !isEditClicked &&
                                <>
                                    <button onClick={editClickHandler} style={{marginLeft: '1em'}} className="btn" type="button">Edit</button>
                                    <button onClick={() => deleteReviewClickHandler(review.id)} className="btn delete-button" style={{marginLeft: '1em'}} type="button">X</button>
                                </>

                            }
                        </div>
                        <Rating rating={review.rating} />
                        <p>
                            {review.comment}
                        </p>
                    </div>
                )}
            </div>

            {
                canLeaveReview 
                ? 
                <div className="reviews-submit">
                    <h4>Give your Review:</h4>
                    <form onSubmit={e => reviewSubmitHandler(e, 'add')} className="row form">
                        <div className="col-sm-6">
                            <label htmlFor="rating">Rating</label>
                            <input type="number" name="rating" value={reviewForm.rating} onChange={ratingChangeHandler} placeholder="Rating" />
                        </div>
                        <div className="col-sm-12">
                            <textarea name="comment" value={reviewForm.comment} onChange={commentChangeHandler} placeholder="Comment"></textarea>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                :
                !hasLeftReview && <h3>You must buy this product to leave review</h3>
            }
        </div>
    );
}