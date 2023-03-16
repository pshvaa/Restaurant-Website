import React from 'react'
// import { MagnificPopup } from 'react-magnific-popup'
import Advantages from '../components/Advantages'
import DishSpecial from '../components/DishSpecial'
// import Features from '../components/Features'
import Introduction from '../components/Introduction'
import ModalVideo from '../components/ModalVideo'
import Specialist from '../components/Specialist'
import Tabs from '../components/TabComponent/Tabs'
import Testimonial2Card from '../components/Testimonial2Card'
import Transitions from '../components/Transitions'
// import Testimonials from '../components/Testimonials'
import Updates from '../components/Updates'
import Welcome from '../components/Welcome'
// import Testimonials2 from './../components/Testimonials2';

// Featuresde problem var islemir


const Home = () => {
  return (
    <>
       
      <Transitions>
         <Introduction />
         <Welcome />
         <Specialist />
         <ModalVideo />
         {/* <MagnificPopup /> */}
         <Tabs />
         <DishSpecial />
         {/* <Testimonials2 /> */}
         <Advantages />
         {/* <Features /> */}
         <Updates />
      </Transitions>
    </>
  )
}

export default Home