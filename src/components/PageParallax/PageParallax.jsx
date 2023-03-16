import React from 'react'
import './PageParallax.css'



const PageParallax = ({background, title, subtitle}) => {
  return (
    <div className="parallax-section">
                    <div className="parallax-menu-intro">
                        <div className="bg-parallax-menu-main"style={{ backgroundImage: `url(${background})`, height:'auto',width:'100%' }}>
                           <div className="parallax-title-main">
                             <h1 className="title" data-aos="fade-up">{title}</h1>
                                <p className="parallax-subtitle text-center">{subtitle}</p>
                           </div>
                        </div>
                         
                    </div>

                    {/* <div className="section-divider"></div>
                    <div className="section-divider"></div> */}
                  </div>
  )
}

export default PageParallax