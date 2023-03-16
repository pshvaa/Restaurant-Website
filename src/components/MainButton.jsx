import React from 'react'

import './MainButton.css'

const MainButton = ({text}) => {
  return (
    <div className="main-button">
         <a href = "#" className="main-button-1 btn-main text-dark">
            <p>{text}</p>
         </a> 
    </div>
  )
}

export default MainButton