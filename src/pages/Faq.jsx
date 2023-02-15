import React from 'react'
import '../components/Faq.css'
import Accordion from '../components/Accordion'


const Faq = () => {
  return (
    <div className="faq">
      <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">You ask, we answer</h1>
             <p className="text text-center">Frequently Asked Questions</p>
          </div>
       </div>
      </div>

      <div className="bottom-side row">
        <div className="container accordion-sec col-12 col-md-7 col-lg-8">
               <Accordion />
        </div>

        <div className="poster col-12 col-md-5 col-lg-4 p-5">
              <div className="poster-top">
                    <form action="#" className="search-form">
                      
                    </form>
              </div>

              <div className="poster-bottom">
                  <p className="handwriting">Need Help!</p>
                  <span className="text">
                  If you have any questions or have any thing to say to us don’t hesitate to write to us, we are here to help!
                  </span>

                  <a className="book-btn" to="#">CONTACT US</a>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Faq