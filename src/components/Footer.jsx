import React from 'react'
import {TiSocialFacebook, TiSocialTwitter} from "react-icons/ti";
// import {TiSocialTwitter} from "react-icons/ti";
import {AiOutlineInstagram} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import logo from '../images/logo.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import './Footer.css'
import MainButton from './MainButton';

const Footer = () => {
  return (
    <section className="footer-sec">

         {/* <div className="section-divider"></div>
         <div className="section-divider"></div> */}
         
         <div className="footer bg-dark">
        <div className="footer-top d-flex justify-content-around align-items-center">
               <div className="unvan d-flex flex-column align-items-center">
                 <h1 className="head text-white">Ünvanımız</h1>
                 <p className='text text-grey'>Gourmet Əhmədli <br />
              Xətai r-nu, Məhəmməd Hadi küç.</p>
                 <a href="#" className='footer-link'>View on Map</a>
               </div>

               {/* <div className="advertise">
                     <img src={logo} alt="" className="logo-img" />
                     <p className="text text-white">
                     Steak In has the perfect place to enjoy fine food and great cocktails with excellent service, in comfortable atmospheric surroundings. We have a soft dining room, combined with an open kitchen, coffee take out bar.
                     </p>
               </div> */}

<div className="make-reserv">
            <h3 className='heading text-white'>Biz səni gözləyirik!</h3>
            <div className="saatlar">
              <div className="open-label d-flex">
                   <p className="day">Həftəiçi</p>
                   <span className="clock">09.00 – 24:00</span>
              </div>

              <div className="open-label d-flex">
                   <p className="day">Şənbə</p>
                   <span className="clock ">08:00 – 03.00</span>
              </div>

              <div className="open-label d-flex">
                   <p className="day">Bazar</p>
                   <span className="clock last">İşləmir</span>
              </div>

              {/* <a href="#" className="button-1">Book a table</a> */}
              <MainButton text="Rezerv et" />
            </div>
          </div>


                    <div className="elaqe">
                      <h1 className='text-white text-center'>Bizimlə Əlaqə</h1>
                      <a href="mailto: 7oroof@7oroof.com" className='text-grey text-center pt-2'>Email: 7oroof@7oroof.com</a>
                      <a href="tel: 02 01065370701" className='text-grey text-center pt-0 pb-2'>Tel: 02 01065370701</a>
                      <a href="#" className='footer-link'>Send a message</a>
                    </div>
        </div>

        <div className="footer-middle pb-5 row">

                    <div className="following d-flex flex-column align-items-center col-12 col-md-6">
                  <span className="text-white p-2">Bizi izləyin</span>
                  <div className="social-links d-flex justify-content-around">
                    <a href="#" className="social-link"><TiSocialFacebook /></a>
                    <a href="#" className="social-link"><TiSocialTwitter /></a>
                    <a href="https://www.instagram.com/gourmet_az/" className="social-link"><AiOutlineInstagram /></a>
                    <a href="#" className="social-link"><IoLogoTiktok /></a>
                    <a href="#" className="social-link"><TfiYoutube /></a>
                  </div>
                    </div>
               
                    <form action="" className="form-subscribe col-12 col-md-6 row align-items-center">
                       <input type="email" placeholder='Abunə olun' className='col-12 col-md-8' />
                       {/* <span className='col-12 col-md-4'><AiOutlineArrowRight activeclassname="active"/></span> */}
                    </form>
               
        </div>

        <div className="footer-bottom">
                  {/* <p className="our-info">
                     22 Alnahas Building, Tanta, Egypt - <a href="#" className="contact">02 01065370701</a> - <a href="" className="email">7oroof@7oroof.com</a>
                  </p> */}

                  <p className="copyright">
                           © 2023 Gourmet, With Love by Sabira
                  </p>
        </div>
         </div>
    </section>
  )
}

export default Footer