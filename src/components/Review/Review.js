import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = (props) => {
    const { review } = props;
    const { rating, name, details, img } = review;
    console.log(details);
    return (
        <div className='review-container'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{details}</p>
        </div>  
    );
};

export default Review;