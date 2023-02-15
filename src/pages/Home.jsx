import React from 'react'
import Advantages from '../components/Advantages'
import Features from '../components/Features'
import Introduction from '../components/Introduction'
import Specialist from '../components/Specialist'
import Tabs from '../components/TabComponent/Tabs'
import Testimonials from '../components/Testimonials'
import Updates from '../components/Updates'
import Welcome from '../components/Welcome'


const Home = () => {
  return (
    <>
       <Introduction />
       <Welcome />
       <Specialist />
       <Updates />
       <Tabs />
       <Advantages />
       <Features />
    </>
  )
}

export default Home