import React from 'react'
import './Features.css'

// import { IoRestaurantOutline } from "react-icons/io5";
// import { TbPlant2 } from "react-icons/tb";
// import { SiCodechef } from "react-icons/si";
// import { GiPartyPopper } from "react-icons/gi";

const Features = () => {
  return (
    <div className="section feature text-center" aria-label="features">
        <div className="container">

          <p className="section-subtitle label-2">Niyə biz?</p>

          <h2 className="headline-1 section-title">Our Strength</h2>

          <ul className="row">

            <li className="feature-item col-12 col-md-6 col-lg-3">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="http://192.168.1.103:5500/assets/images/features-icon-1.png" width="100" height="80" loading="lazy" alt="icon" />
                  {/* <IoRestaurantOutline className='skill-icon' loading="lazy" alt="icon" /> */}
                  
                </div>

                <h3 className="title-2 card-title">Hygienic Food</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item col-12 col-md-6 col-lg-3">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="http://192.168.1.103:5500/assets/images/features-icon-2.png" width="100" height="80" loading="lazy" alt="icon" />
                  {/* <TbPlant2 className='skill-icon' loading="lazy" alt="icon" /> */}
                </div>

                <h3 className="title-2 card-title">Fresh Environment</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item col-12 col-md-6 col-lg-3">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="http://192.168.1.103:5500/assets/images/features-icon-3.png" width="100" height="80" loading="lazy" alt="icon" />
                  {/* <SiCodechef className='skill-icon' loading="lazy" alt="icon" /> */}
                </div>

                <h3 className="title-2 card-title">Skilled Chefs</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item col-12 col-md-6 col-lg-3">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="http://192.168.1.103:5500/assets/images/features-icon-4.png" width="100" height="80" loading="lazy" alt="icon" />
                  {/* <GiPartyPopper className='skill-icon' loading="lazy"  alt="icon"/> */}
                </div>

                <h3 className="title-2 card-title">Event & Party</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

          </ul>

          <img src="http://192.168.1.103:5500/assets/images/shape-7.png" width="208" height="178" loading="lazy" alt="shape"
            className="shape shape-1" />

          <img src="http://192.168.1.103:5500/assets/images/shape-8.png" width="120" height="115" loading="lazy" alt="shape"
            className="shape shape-2" />

        </div>
      </div>
  )
}

export default Features