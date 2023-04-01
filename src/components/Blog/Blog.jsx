import React from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log(props);
    const {name,title,image,img,time,date}= props.blog;

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
                <div>
                    <p>{time} min read</p>
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