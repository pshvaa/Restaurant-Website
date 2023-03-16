import React from 'react'
import './Eventcard.css'
import { IconContext } from "react-icons";
import { RxBookmark } from "react-icons/rx";
import { TiPencil } from "react-icons/ti";
import MyBtn from './MyBtn';

const Eventcard = ({eventImage, title, place, contributor, content}) => {
  return (
    <div className="event-card col-12 col-md-4">
         <div className="event-img-top crispy-1"></div>
         <img src={eventImage} alt="" className="event-img" />
         <div className="event-img-bottom crispy-1"></div>
         <div className="event-content">
             <h4 className='update-title'>{title}</h4>
             <div className="event-metadata">
                  
                  <IconContext.Provider value={{ className: "meta-style" }}>
                  <i class="fa-regular fa-bookmark meta-icon"></i><span className='meta'>{place} <span className='meta text-grey'>|</span> <i className="fa-solid fa-pencil meta-icon"></i>{contributor}</span>
                  </IconContext.Provider>
             </div>
             <p className='text-grey'>{content}</p>
         </div>
         <MyBtn text = "Ətraflı" />
    </div>
  )
}

export default Eventcard