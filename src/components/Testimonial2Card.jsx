import React from 'react'
import './Testimonial2Card.css'

import '../clients.json'

const Testimonial2Card = ({clientImage, ad, soyad, content}) => {
  return (
    <>
     <figure className="testcard col-12 col-md-6 col-lg-4">
     <blockquote>
        {content}
    <div className="arrow"></div>
  </blockquote>
  <img src={clientImage} alt="client" />
  <div className="author">
    <h5>{ad} {soyad}</h5>
  </div>
     </figure>
    </>
  )
}

export default Testimonial2Card