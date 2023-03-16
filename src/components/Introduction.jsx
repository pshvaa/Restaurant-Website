import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './Introduction.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import {  Autoplay, Parallax, Pagination, Navigation, EffectFade } from "swiper";
import Navbar from './Navbar';
import MainButton from './MainButton';

const Introduction = () => {
  return (
    <>
    <div className="intro-section">
           <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "transparent",
        }}
        speed={300}
        parallax={true}
        loop={true}

        // delay: 3500,
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation, EffectFade]}
        className="mySwiper parallax-swiper"
      >
        <div
          slot="container-start"
          data-swiper-parallax="-23%"  
        ></div>
        <SwiperSlide className='para-container'>
         <div className="para parallax-bg-1 intro-1 d-flex flex-column justify-content-center align-items-center">
          <div className="intro-meta d-flex flex-column align-items-center">
               <div className="title" data-swiper-parallax="-300">
               Daima təzə və
                  sağlam inqredientlər

              </div>
              <div className="subtitle" data-swiper-parallax="-200">
             <p className='info-text text-center heading'>
                  Mövsümi menyumuzdan həzz alın və təbiiliyin gözəlliyini hiss edin.
                  Qayğısız uşaqlıqdan gələn dadı xatırladayın
             </p>
              </div>
              <div className="text" data-swiper-parallax="-100">
              <MainButton text="View All Menu" className = "intro-btn" />
              </div>
          </div>
          
         </div>
  
        </SwiperSlide>
        <SwiperSlide>
          <div className="para parallax-bg-2 intro-2 d-flex flex-column justify-content-center align-items-center">
          <div className="intro-meta d-flex flex-column align-items-center">
               <div className="title" data-swiper-parallax="-300">
               Beynəlxalq mətbəx
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
             <p className='info-text text-center heading'>
             Biz əhalinin müxtəlif seqmentləri tərəfindən etibar qazanan Azərbaycan brendiyik. 
             </p>
              </div>
              <div className="text" data-swiper-parallax="-100">
              <MainButton text="Bütün Menu" className = "intro-btn" />
              </div>
          </div>
          
          
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="para parallax-bg-3 intro-3 d-flex flex-column justify-content-center align-items-center">
          <div className="intro-meta d-flex flex-column align-items-center">
      
               <div className="title" data-swiper-parallax="-300">
               Canlı Musiqi
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
             <p className='info-text text-center heading'>
             Məlumdur ki, musiqi həzmi yaxşılaşdırır və yeməkdən daha çox emosional zövq almağa kömək edir, buna görə də xidmətlərimiz siyahısına "canlı musiqi" daxil etməyə bilməzdik
             </p>
              </div>
              <div className="text" data-swiper-parallax="-100">
              <MainButton text="Menu" className = "intro-btn" />
              </div>
          </div>
          </div>
        
        </SwiperSlide>
      </Swiper>

      <div className="messy-divider"></div>
    </div>
    </>
  );
}

export default Introduction