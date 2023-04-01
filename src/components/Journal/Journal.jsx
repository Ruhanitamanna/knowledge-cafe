import React, { useState,useEffect } from 'react';
import './Journal.css'
import Blog from '../Blog/Blog';

const Journal = () => {
    const [blogs,setBlogs] = useState([]);
    const [times, setTimes] = useState([])

    useEffect(()=>{
        fetch('info.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[]);


    let totalTime = 0;
    const sumOfTime = (time) => {
       const newTime = [...times,time];
        // totalTime + time;
        setTimes(newTime)
    }
    return (
        <div className='journal-container'>
            <div className='blogs-container'>
             {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog ={blog}
                    sumOfTime={sumOfTime}
                >

                </Blog>
                )

             }
            </div>
            <div className='bookmarks-container'>
                <div>
                    <h2>Spent time on read:{times.length}</h2>
                </div>
            <h3>hello from the other side</h3>
            </div>

           
        </div>
    );
};

export default Journal;