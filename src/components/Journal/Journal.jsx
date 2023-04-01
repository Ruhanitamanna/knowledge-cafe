import React, { useState,useEffect } from 'react';
import './Journal.css'
import Blog from '../Blog/Blog';

const Journal = () => {
    const [blogs,setBlogs] = useState([]);
    const [times, setTimes] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[]);

    const bookmarkedArticle = (article) => {
        const newArticle = [...articles,article];
        setArticles(newArticle)
    }
    
    const sumOfTime = (time) => {
       const newTime = [...times,time];
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
                    bookmarkedArticle = {bookmarkedArticle}
                >
                </Blog>
                )

             }
            </div>
            <div className='bookmarks-container'>
                <div >
                    <h2>Spent time on read:{times.length}</h2>
                </div>
                <div>
                    <h2>Bookmarked Blogs:{articles.length}</h2>
                    {/* {
                        articles.map(article => article.title)
                    } */}

                </div>
            </div>

           
        </div>
    );
};

export default Journal;