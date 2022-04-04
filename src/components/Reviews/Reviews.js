import React from 'react';
import useReviews from '../../hooks/getReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div>
            <h2>See What people say about us.</h2>
            <div className='reviews-container'>
                {
                    reviews.map(review =>
                        // console.log(review);
                        <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;