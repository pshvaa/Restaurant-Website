import React from 'react'
import './OurStory.css'

const OurStory = () => {
  return (
    <>
      <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">Our Story</h1>
             <p className="text text-center">We Are Steak In!</p>
          </div>
       </div>
      </div>

       <div class="section about text-center" aria-labelledby="about-label" id="about">
        <div class="container d-flex row ">

          <div class="about-content col-12 col-md-6 col-lg-5">

            <p class="label-2 section-subtitle" id="about-label">Our Story</p>

            <h2 class="headline-1 section-title">Every Flavor Tells a Story</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book It has survived not only five centuries, but also the leap into.
            </p>

            <div class="contact-label">Book Through Call</div>

            <a href="tel:+804001234567" class="body-1 contact-number hover-underline">+80 (400) 123 4567</a>

            <a href="#" class="btn">
              <span class="text text-1">Read More</span>

              <span class="text text-2" aria-hidden="true">Read More</span>
            </a>

          </div>

          <figure class="about-banner col-12 col-md-6 col-lg-7">

            <img src="http://192.168.1.103:5500/assets/images/about-banner.jpg" width="570" height="570" loading="lazy" alt="about banner"
              class="w-100" data-parallax-item data-parallax-speed="1" />

            <div class="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
              <img src="http://192.168.1.103:5500/assets/images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt=""
                class="w-100" />
            </div>

            <div class="abs-img abs-img-2 has-before">
              <img src="http://192.168.1.103:5500/assets/images/badge-2.png" width="133" height="134" loading="lazy" alt=""/>
            </div>

          </figure>

          <img src="http://192.168.1.103:5500/assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" class="shape" />

        </div>
      </div>
    </>
  )
}

export default OurStory