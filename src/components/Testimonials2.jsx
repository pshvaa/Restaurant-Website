import React from 'react'
import Testimonial2Card from './Testimonial2Card'

import clientData from '../clients.json'

const Testimonials2 = () => {
  return (
    <div className="secondary-testimonial row bg-dark">
        {
           clientData.map(p => (
              <Testimonial2Card content={p.content} img={p.clientImage} ad={p.ad} soyad={p.soyad}/>
           ))
        }
    </div>
  )
}

export default Testimonials2