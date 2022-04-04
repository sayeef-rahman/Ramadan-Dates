import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/getReviews';
import khejur from '../Home/khejur.jpg'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = reviews.slice(0,3);

    return (
        <div>
            <div className='home-hero-section'>
                <div>
                    <h1>
                        Stay <span>Healthy</span> Eat <span>Dates</span>
                    </h1>
                    <p>
                        Dates are a fruit that come from the date palm tree, which is native to the Middle East, although they are also now grown in the Mediterranean, Asia, the USA and Mexico.Dried and fresh dates are available year round, but the fresh type are best between November and January.
                    </p>
                </div>
                <div>
                    <img src={khejur} alt="" />
                </div>
            </div>
            <h1 className='customer-review'>Our Custmer Reviews</h1>
            <div className='home-cr'>
                {
                    newReviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>
                    )
                }
            </div>
            <button><Link to="/reviews"><span className='see-reviews-btn'>See All Reviews</span></Link></button>
        </div>
    );
};

export default Home;