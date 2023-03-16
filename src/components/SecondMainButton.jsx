import React from 'react'
import './SecondMainButton.css'

const SecondMainButton = ({text}) => {
  return (
    <div className="second-main-btn">
         <a href = "#" className="main-button-2 btn-main text-dark">
            <p>{text}</p>
         </a> 
    </div>
  )
}

export default SecondMainButton