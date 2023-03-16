import React from 'react'
import './OurStory.css'
import PageParallax from './PageParallax/PageParallax'
import MyBtn from './MyBtn';

const OurStory = () => {
  return (
    <>

    <div className="our__story">
        <PageParallax background="http://templates.framework-y.com/gourmet/images/bg-6.jpg" title= "Bizim Hekayəmiz" subtitle="Latest News & Events" />



         <div className="section-divider"></div>
        <div className="section about text-center" aria-labelledby="about-label" id="about">
        <div className="container align-items-center row">

          <div className="about-content col-12 col-md-6 col-lg-5">

            <p className="section-subtitle" id="about-label">Our Story</p>

            <h2 className="headline-1 section-title heading">Biz Kimik</h2>

            <p className="section-text">
            21 sentyabr 2009-cu il tarixində paytaxtımızın mərkəzində Gourmet şəbəkəsinin ilk filialı öz qapılarını müştərilərin üzünə təntənəli surətdə açdı. İldən-ilə sevginizi, etibarınızı, müsbət münasibət qazanmaq üçün təklif etdiyimiz xidmətin hər seqmenti ilə çalışdıq, sizin bütün rəy və arzularınızı nəzərə alaraq işimizin keyfiyyətini təkmilləşdiririk. Biz cəsarətlə deyə bilərik ki, kafemiz əsl qurmanlar üçün əlamətdar yerdir, çünki müəssisəmizin adı qeyri-ixtiyari olaraq təamlarının ləzizliyi, çeşidin rəngarəngliyi ilə təcəssüm olunur.
            </p>

            {/* <div class="contact-label">Book Through Call</div> */}

            {/* <a href="tel:+804001234567" class="body-1 contact-number hover-underline">+80 (400) 123 4567</a> */}

            {/* <a href="#" class="b"> */}
            <MyBtn text="Daha Ətraflı" />
              {/* <span class="text text-1">Read More</span> */}

              {/* <span class="text text-2" aria-hidden="true">Read More</span> */}

          </div>

          {/* <div className="section-divider"></div> */}
          <figure className="about-banner col-12 col-md-6 col-lg-7">

            <img src="https://www.opentable.com/blog/wp-content/uploads/sites/108/2017/03/blog-charleston-grill-interior-with-people-copy.jpeg" width="570" height="570" loading="lazy" alt="about banner"
              className="w-100" data-parallax-item data-parallax-speed="1" />

            {/* <div class="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
              <img src="https://media.istockphoto.com/id/1184016689/photo/close-up-of-young-couple-toasting-with-glasses-of-red-wine-at-restaurant.jpg?s=612x612&w=0&k=20&c=ldw2QTajKHCpaudYpTBnWZ53X31X5Uwa324BP4lZOcY=" width="285" height="285" loading="lazy" alt=""
                class="w-100" />
            </div> */}

            {/* <div class="abs-img abs-img-2 has-before"> */}
              {/* <img src="http://192.168.1.103:5500/assets/images/badge-2.png" width="133" height="134" loading="lazy" alt=""/> */}
            

          </figure>

          {/* <img src="http://192.168.1.103:5500/assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" class="shape" /> */}

            <div className="section-divider"></div>
        </div>
      </div>
    </div>
      {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">Our Story</h1>
             <p className="text text-center">We Are Steak In!</p>
          </div>
       </div>
      </div> */}

    </>
  )
}

export default OurStory