import React from 'react'
import './Eventcard.css'
import { RxBookmark } from "react-icons/rx";
import { TiPencil } from "react-icons/ti";

const Eventcard = ({eventImage, title, place, contributor, content}) => {
  return (
    <div className="event-card col-12 col-md-4">
         <img src={eventImage} alt="" className="event-img" />
         <div className="event-content">
             <h4>{title}</h4>
             <div className="metadata">
                  <RxBookmark /><span>{place} | <TiPencil />{contributor}</span>
             </div>
             <p>{content}</p>
         </div>
         <a to="#" className='btn text-uppercase myBtn'>Read More</a>
    </div>
  )
}

export default Eventcard