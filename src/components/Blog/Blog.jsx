import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
   
    const {name,title,image,img,time,date}= props.blog;

    const bookmarkedArticle = props.bookmarkedArticle
    const sumOfTime = props.sumOfTime
    
    return (
        <div className='blog-container'>
            <img  src={image} alt="" />
            <div className='name-section'>
                <div className='img-name-section'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='time-to-read'>
                    <p>{time} min read</p>
                    
                    <p onClick={()=>{bookmarkedArticle()}}><FontAwesomeIcon icon={faBookmark} /></p>

                </div>

            </div>
            
            <h2>{title}</h2>
            <div className='sum-of-time'>
                
                <h4 onClick={()=>{sumOfTime()}}>Mark as read</h4>
            </div>

        </div>
    );
};

export default Blog;