import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qa-header'>
            <p className='qa-title'>Get Some knowledge</p>
            <div className='blogs-container'>
                <div className='blog'>
                    <p className='blog-title'>Context API and How it Works?</p>
                    <p className='blog-content'>Sometimes we need to transfer same data in different component. If we use same data separately in different component then it becomes redundancy, which is very time consuming for website load time at the end the user experience is very bad to stay with. To solve this problem we use context API. In React it is a way to pass data in all components. Context API shares the data globally but we can use it locally and we don't need to fetch the JSON file every time in the components. We can use createContext(); to create context and import context from react Dom. Finally export the context API to access it from different components.</p>
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