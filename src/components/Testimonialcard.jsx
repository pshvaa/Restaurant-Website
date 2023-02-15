import React from 'react'
import '../clients.json'
import './Testimonialcard.css'
import { AiFillStar } from "react-icons/ai";

// ---------------------------------------------------------


const Testimonialcard = ({clientImage, content, ad, soyad}) => {
    return (
      <div className="testimonial-card col-12 col-md-4">
           
           <div className="testimonial-content recipes-inline">
                     <span ><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></span>
                    <p>{content}</p>
                    <img src={clientImage}  className="client-img" />
                    <span>{ad} {soyad}</span>
               
           </div>
      </div>
    )
}

export default Testimonialcard