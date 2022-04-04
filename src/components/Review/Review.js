import React from 'react';
import './Review.css'

const Review = (props) => {
    const { review } = props;
    const {rating, name, detail, img } = review;
    return (
        <div className='review-container'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{rating} </p>
        </div>
    );
};

export default Review;