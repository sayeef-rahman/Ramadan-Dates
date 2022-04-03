import React from 'react';
import useReviews from '../../hooks/getReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div>
            <div>
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