import React, { useState,useEffect } from 'react';
import './Journal.css'
import Blog from '../Blog/Blog';

const Journal = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className='journal-container'>
            <div className='blogs-container'>
             {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog ={blog}
                >
                    
                </Blog>
                )

             }
            </div>
            <div className='bookmarks-container'>
                <div></div>
            <h3>hello from the other side</h3>
            </div>

           
        </div>
    );
};

export default Journal;