import React from 'react'
import '../../src/components/Contact.css'
import Map from '../components/Map'
const Contact = () => {
  return (
    <>


    <div className="contact section" id="contact">
        <div className="parallax-section">
      <div classNameName="parallax-menu-intro">
          <div classNameName="bg-parallax-menu"></div>
          <div classNameName="parallax-title">
             <h1 classNameName="heading">GET IN TOUCH</h1>
             <p classNameName="text text-center">Contact Us</p>
          </div>
       </div>
      </div>
       
      <div className="contact-container">
    <div className="contact-content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="ct-right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box message-box">
           <textarea placeholder='Your message'></textarea>
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
      </div>

      <Map />
    </div>


    </>
  )
}
export default Contact