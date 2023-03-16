import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineBookmark } from "react-icons/hi2";
import { FaPencilAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

import './BlogCard.css'

import '../blogs.json'
import MyBtn from './MyBtn';

const BlogCard = ({date, blogImage, title, topic, writer, content}) => {
  return (
    <>
        <div className="blog-card col-12 col-md-10">
        <div className='headline'>
           <p className="title-1">{title}</p>
           <span><AiOutlineCalendar />{date}</span>
        </div>
        <div className='metadata'><i className="fa-regular fa-bookmark meta-icon" /> {topic} | <i className="fa-solid fa-pencil meta-icon"/> {writer} | <i className="fa-solid fa-share-nodes meta-icon"></i> </div>
        <img src={blogImage} alt="blog" className='blog-img' />
        <div className="blog-bottom">
             <p className='text'>{content}</p>
             <MyBtn text = "Daha Ətraflı" />
        </div>
    </div>

    {/* <div className="section-divider"></div> */}
    </>
  )
}

export default BlogCard