import React from 'react'
import './ChefIntroCard.css'

//Bunun css temchefdedir 
import '../chefs.json'

const ChefIntroCard = ({chefImage, name, surname, job, info}) => {
  return (
    
      
      <div className="tile col-12 col-md-4 col-lg-3">
      <img src = {chefImage}/>
        <div className="text">
          <h1>{name} {surname}</h1>
          <h2 className="animate-text">{job}</h2>
          <p className="animate-text">{info}</p>
        </div>
      
      <div className="dots">
    <span></span>
    <span></span>
    <span></span>
      </div>
      </div>
     
  )
}

export default ChefIntroCard