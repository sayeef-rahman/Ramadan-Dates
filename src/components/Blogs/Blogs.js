import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qa-header'>
            <p className='qa-title'>Get Some knowledge</p>
            <div className='blogs-container'>
                <div className='blog'>
                    <p className='blog-title'>Context API and How it Works?</p>
                    <p className='blog-content'>Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
                </div>
                <div className='blog'>
                    <p className='blog-title'>What is Semantics Tag?</p>
                    <p className='blog-content'>In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)In JavaScript, consider a function that takes a string parameter, and returns an li element with that string as its textContent. Would you need to look at the code to understand what the function did if it was called build('Peach'), or createLiWithContent('Peach')?In JavaScript, consider a function that takes a string parameter, </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;