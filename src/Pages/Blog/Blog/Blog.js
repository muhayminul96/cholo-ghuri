import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {blogText,title} = props.blog
    return (
        <div className='blog-body'>
            <h3>{title}</h3>
            <p>{blogText}</p>
        </div>
    );
};

export default Blog;