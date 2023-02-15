import React from 'react'
import ChefIntroCard from './ChefIntroCard'
// import './TempChef.css'

import chefData from '../chefs.json'

const TempChef = () => {
  return (
    <>
       <div className="chefs">
       <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">MENU GRId</h1>
             <p className="text text-center">Menu and Portfolio</p>
          </div>
       </div>
      </div>

      
      <div className="chef-wrap row">
      {chefData.map(c => (
         <ChefIntroCard chefImage={c.chefImage} name = {c.name} surname={c.surname} job = {c.job} info = {c.info}  />
      ))}
     </div>

     <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
          <img src="http://7oroof.com/demos/steakin/assets/images/testimonial/chef-hat.png"  />
             <p className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem dignissimos quis eveniet culpa officia ex ratione consequatur nihil voluptatum.</p>
             <p className="text text-center">Michael Luke</p>
          </div>
       </div>
      </div>
  
</div>


  
    </>
  )
}

export default TempChef