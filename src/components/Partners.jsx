import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './Partners.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";



// Import Swiper styles


const Partners = () => {
  return (
    <div className="ads-partners partners-slider">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="MySwiper"
      >
        <SwiperSlide className='slide'>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-1.png" alt="award-1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-2.png" alt="award-2" />
        </SwiperSlide>
        <SwiperSlide>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-3.png" alt="award-3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-4.png" alt="award-4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-5.png" alt="award-5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="http://templates.framework-y.com/gourmet/images/logos/award-6.png" alt="award-6" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners