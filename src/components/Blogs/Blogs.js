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
                    <p className='blog-content'>In simple word Semantics is represents a piece or block of code. Semantic Hyper Text Markup Language or semantic style helps web pages to understand meaningdful element or tags not only the representation but also the justification of content type. For example if we want to shoe and imag in web then we use img tag with source attribute of the image. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;