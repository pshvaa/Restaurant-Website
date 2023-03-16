import React from 'react'
import '../components/Faq.css'
import Accordion from '../components/Accordion'

import Transitions from '../components/Transitions'
import PageParallax from '../components/PageParallax/PageParallax'
import MainButton from '../components/MainButton'
import Partners from '../components/Partners'
import OffCanvas from '../components/OffCanvas'



const Faq = () => {
  return (
    <>
       <Transitions>
        
       <div className="faq">
      

       <PageParallax background="http://templates.framework-y.com/gourmet/images/bg-6.jpg" title= "FAQ" subtitle="Siz soruşun, biz cavablandıraq" />
       <div className="bc-video-bottom"></div>

       
       <div className="section-divider"></div>
      <div className="bottom-side row">
        <div className="container accordion-sec col-12 col-md-7 col-lg-8">
               <Accordion />
        </div>

        <div className="poster col-12 col-md-5 col-lg-4 p-5">
              {/* <div className="poster-top">
                    <form action="#" className="search-form">
                        <input type="text" placeholder='Search' />
                    </form>
              </div> */}

              <div className="poster-bottom">
                   <div className="divider-pattern-up"></div>
                  <p className="handwriting">Need Help!</p>
                  <span className="text text-center">
                  Hər hansı bir sualınız varsa, bizə yazmaqdan çəkinməyin, kömək etmək üçün buradayıq!
                  </span>

                  {/* <a className="help-btn" to="#">CONTACT US</a> */}
                  <MainButton text="Əlaqə saxla" />
              </div>
              
        </div>

        
      </div>

      {/* <Partners /> */}

      <div className="section-divider"></div>


      {/* <OffCanvas /> */}

      {/* <div className="section-divider"></div> */}
      
       </div>
       </Transitions>
    </>
  )
}

export default Faq