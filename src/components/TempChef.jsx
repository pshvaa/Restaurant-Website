import React from 'react'
import ChefIntroCard from './ChefIntroCard'
// import './TempChef.css'

import chefData from '../chefs.json'
import PageParallax from './PageParallax/PageParallax'

import './TempChef.css'

const TempChef = () => {
  return (
    <>
      <div className="para-chef-wrapper">
         <PageParallax background="http://templates.framework-y.com/gourmet/images/bg-28.jpg" title= "Bizi Tanıyaq" 
          />

          <div className="page-title-icon">
             <span></span>
          </div>
      </div>
       

       <div className="section-divider"></div>
       <div className="section-divider"></div>
       
       <div className="chefs">
       {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">MENU GRId</h1>
             <p className="text text-center">Menu and Portfolio</p>
          </div>
       </div>
      </div> */}

      <h1 className="heading">Şeflərimizi tanıyın</h1>

     
      {/* <div className="chef-bg">
         <img src="https://mediacity.co.in/delici/static/media/bg-9.8b309506e9fcec931806.png" />
      </div> */}
      
      <div className="chef-wrap row">
      {chefData.map(c => (
         <ChefIntroCard chefImage={c.chefImage} name = {c.name} surname={c.surname} job = {c.job} info = {c.info}  />
      ))}
     </div>

     <div className="section-divider"></div>
     <div className="section-divider"></div>
     <div className="section-divider"></div>
     <div className="section-divider"></div>
     <div className="section-divider"></div>

     {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
          <img src="http://7oroof.com/demos/steakin/assets/images/testimonial/chef-hat.png"  />
             <p className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem dignissimos quis eveniet culpa officia ex ratione consequatur nihil voluptatum.</p>
             <p className="text text-center">Michael Luke</p>
          </div>
       </div>
      </div>
   */}

   <PageParallax background="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/06/granny-bg-parallax5.jpg" title='Bəzən nə istədiyimizi bilmirik yeni təamlar axtarırıq bizim restoran sizə məhz o təamları təqdim edirməkdə kömək edecək ' />

   {/* <Openhours /> */}

</div>


  
    </>
  )
}

export default TempChef