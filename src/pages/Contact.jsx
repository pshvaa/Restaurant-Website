import React from 'react'
import Transitions from '../components/Transitions'
import '../../src/components/Contact.css'
import Map from '../components/Map'
import Subscribe from '../components/Subscribe'
import PageParallax from '../components/PageParallax/PageParallax'

import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>

   <Transitions >
   <div className="contact-section" id="contact">

<PageParallax background="https://mediacity.co.in/delici/static/media/banner-image-4.f530974262de45d46544.jpg" title= "Əlaqə" subtitle="Ən son xəbərlər və hadisələr" />
{/* <div className="bc-video-bottom"></div> */}

{/* <div className="parallax-section">
<div className="parallax-menu-intro">
    <div className="bg-parallax-menu"></div>
    <div className="parallax-title">
       <h1 className="heading">Stay Updated</h1>
       <p className="text text-center">Latest News & Events</p>
       
    </div>
 </div>
</div> */}
 
<ContactForm />
</div>

{/* <Subscribe /> */}

<Map />
   </Transitions>


    


    </>
  )
}
export default Contact