import React from 'react';
import './Review.css'

const Review = (props) => {
    const {review} = props;
    const {id,rating,name,detail,img} = review;
    return (
        <div className='review-container'>
            <div className='customer-image'>
                {/* <img src={img} alt="" /> */}
            </div>
            {/* <p>{name}</p> */}

        </div>
    );
};

export default Review;