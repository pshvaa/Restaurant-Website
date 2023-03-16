import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from './Testimonialcard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";


// import required modules
import { Pagination } from "swiper";
import testimonialData from '../clients.json'
import StoryClub from './StoryClub';
import Reservation from './Reservation';

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-sec">
        <div className="test-parallax">
              <div className="regular-wrapper">
               </div>
             <div className="handwriting">Testimonials</div>
             <h1 className="heading">Happy Customers</h1>
             <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {
        // eventImage, title, place, contributor, content
        testimonialData.map(p => (
          <SwiperSlide> <TestimonialCard  content = {p.content} clientImage = {p.clientImage} ad = {p.ad} soyad = {p.soyad} /> </SwiperSlide> 
        ))
      }
             </Swiper>


        </div>

        <StoryClub />

        <div className="test-parallax">
            <Reservation />
        </div>

        </div>
    </>
  )
}

export default Testimonials