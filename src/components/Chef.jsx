import React from 'react'

import './Chef.css';

const Chef = () => {
  return (
    <div className="container-chef">
      {/* <button type="button" id="flip-btn">Flip Card</button> */}
      <div className="card">
        <div id="back" className="cardBack">Back</div>
        <div id="front" className="cardFront">Front</div>
      </div>
    </div>
  )
}

export default Chef