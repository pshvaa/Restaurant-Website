import './Updates.css'
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import EventCard from './Eventcard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import eventData from '../events.json'

const Updates = () => {
  return (
    <div className="updates-section row">
          <span className="handwriting">Don't Miss</span>
          <h1 className="heading">Our News & Events</h1>

          {/* <img src="../images/pattern.png" className='pattern'/> */}



          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}


        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
      {
        // eventImage, title, place, contributor, content
        eventData.map(p => (
          <SwiperSlide> <EventCard eventImage = {p.eventImage} title = {p.title} place = {p.place} contributor = {p.contributor} content = {p.content} /> </SwiperSlide> 
        ))
      }
       
      </Swiper>

          
    </div>
  )
}

export default Updates