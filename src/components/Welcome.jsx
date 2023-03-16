import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <>
         <div className="welcome-section sec row">
        
        <div className="left-text col-xs-12 col-sm-12 col-md-6" data-aos="fade-right">
                   <h1 className="heading">
                       GOURMET-ə xoş gəlmisiniz
                   </h1>

                   {/* <img src="../images/pattern.png"/> */}
                   {/* <img src="http://7oroof.com/demos/steakin/assets/images/background/shapes/shape-4.png"/>
                   pattern */}


                   <p className="text">
                   Gourmet–şəhərin qastronomik mədəniyyətində yeni bir ad!

2023-cu ilin martında Novriz ərəfəsində restoran öz qapılarını zəngin milli mətbəximizə dəyər verənlərin üzünə açdı.
Müəllif qəlyanaltıların və təamların ləzzətli çeşidi, sac və manqalda hazırlanan yeməklər və, əlbəttəki, inanılmaz dada malik şərq şirniyyatları bugünədək görmədiyiniz fərqli bir dad çalarlarını yaradacaqlar.
                   </p>

                   <a to="#" className='btn text-uppercase myBtn'>Rezerv et</a>
            </div>

            
                   <div  className="img-left left-text col-xs-12 col-sm-12 col-md-3" data-aos="fade-left" />
                   <img src="https://rare-gallery.com/uploads/posts/508321-food-luxury.jpg"  className="img-right left-text col-xs-12 col-sm-12 col-md-3" data-aos="fade-left" />
           


    </div>

    {/* <div className="section divider"></div>
    <div className="section-divider"></div> */}
    </>
          
  )
}

export default Welcome