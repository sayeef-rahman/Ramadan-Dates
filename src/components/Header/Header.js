import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h3>Ramadan Dates</h3>
            <nav>
               <span><Link to="/" className='nav-link'>Home</Link></span> 
                <Link to="/reviews" className='nav-link'>Reviews</Link>
                <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                <Link to="/blogs" className='nav-link'>Blogs</Link>
                <Link to="/about" className='nav-link'>About</Link>
            </nav>
        </div>
    );
};

export default Header;