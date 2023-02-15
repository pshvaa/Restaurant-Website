import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './Introduction.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Autoplay, Parallax, Pagination, Navigation } from "swiper";
import Navbar from './Navbar';

const Introduction = () => {
  return (
    <>
    <div className="intro-section">
           <Swiper
        style={{
          "--swiper-navigation-color": "#C9B29D",
          "--swiper-pagination-color": "#C9B29D",
        }}
        speed={250}
        parallax={true}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          data-swiper-parallax="-23%"  
        ></div>
        <SwiperSlide>
         <div className="parallax-bg-1 intro-1 d-flex flex-column justify-content-center align-items-center">
          <div className="title" data-swiper-parallax="-300">
              TASTE & MUSIC
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
             <p className='info-text text-center'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure nobis molestias modi tempore quia, exercitationem sit illum at ipsum?
             </p>
          </div>
          <div className="text" data-swiper-parallax="-100">
               <a to="#" className='btn text-uppercase myBtn'>View Menu</a>
          </div>
         </div>
  
        </SwiperSlide>
        <SwiperSlide>
          <div className="parallax-bg-2 intro-2 d-flex flex-column justify-content-center align-items-center">
          <div className="title" data-swiper-parallax="-300">
            We are Food Masters
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <p className="info-text text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium quaerat perferendis doloribus ipsa quia beatae. Dolores nihil ipsam corrupti?
            </p>
          </div>
          <div className="text" data-swiper-parallax="-100">
             <a to="#" className='btn text-uppercase myBtn'>View Menu</a>
          </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="parallax-bg-3 intro-3 d-flex flex-column justify-content-center align-items-center">
          <div className="title" data-swiper-parallax="-300">
            We Serve Quality Food
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <p className="info-text text-center">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam natus est quidem quam fuga dicta, animi ea earum dolor doloribus?
            </p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <a to="#" className='btn text-uppercase myBtn'>View Menu</a>
          </div>
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

export default Introduction