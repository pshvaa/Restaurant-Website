import React from 'react'

import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe section has-bg-image text-center"
    style={{backgroundImage: `url('http://192.168.1.103:5500/assets/images/img-pattern.svg')`}}>
    <div className="container black-div">

      <div className="subscribe-top grid-list">

        <div className="subscribe-brand has-before has-after">

          {/* <a href="#" className="logo">
            <img src="./assets/images/logo.svg" width="160" height="50" loading="lazy" alt="grilli home" />
          </a> */}

          {/* <address className="body-4">
            Restaurant St, Delicious City, London 9578, UK
          </address>

          <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@grilli.com</a>

          <a href="tel:+88123123456" className="body-4 contact-link">Booking Request : +88-123-123456</a>

          <p className="body-4">
            Open : 09:00 am - 01:00 pm
          </p> */}

          

          <p className="title-1">Get News & Offers</p>

          <p className="label-1">
            Subscribe us & Get <span className="span">25% Off.</span>
          </p>

          <form action="" className="input-wrapper">
            <div className="icon-wrapper">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

              <input type="email" name="email_address" placeholder="Your email" autocomplete="off" className="input-field" />
            </div>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Subscribe</span>

              <span className="text text-2" aria-hidden="true">Subscribe</span>
            </button>
          </form>

        </div>

      </div>


    </div>
  </div>
  )
}

export default Subscribe