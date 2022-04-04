import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = (props) => {
    const { review } = props;
    const { rating, name, details, img } = review;
    return (
        <div className='review-container'>
            <img src={img} alt="" />
            <p className='customer-name'>{name}</p>
            <p><strong>Rating: <span className='customer-rating'>{rating}</span> </strong> <FontAwesomeIcon icon={faStar} className='star-icon'></FontAwesomeIcon></p>
            <p>{details}</p>
        </div>
    );
};

export default Review;