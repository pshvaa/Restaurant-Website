import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className="map">
        <div className="section-divider "></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.529942543881!2d49.82522661533149!3d40.39710947936727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ddfc8529f69%3A0x9634e7515a622eee!2sGOURMET!5e0!3m2!1str!2s!4v1676205958771!5m2!1str!2s" className='iframe-map' width="100%" height="650" style={{ border: "0" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    </div>
  )
}

export default Map