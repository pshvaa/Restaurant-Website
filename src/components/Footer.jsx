import React from 'react'
import {TiSocialFacebook, TiSocialTwitter} from "react-icons/ti";
// import {TiSocialTwitter} from "react-icons/ti";
import {AiOutlineInstagram} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import logo from '../images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top d-flex justify-content-around align-items-center">
               <div className="following d-flex flex-column align-items-center">
                  <span className="text">Follow us</span>
                  <div className="social-links d-flex justify-content-around">
                    <a href="#" className="social-link"><TiSocialFacebook /></a>
                    <a href="#" className="social-link"><TiSocialTwitter /></a>
                    <a href="https://www.instagram.com/gourmet_az/" className="social-link"><AiOutlineInstagram /></a>
                    <a href="#" className="social-link"><IoLogoTiktok /></a>
                    <a href="#" className="social-link"><TfiYoutube /></a>
                  </div>
               </div>

               <div className="advertise">
                     <img src={logo} alt="" className="logo-img" />
                     <p className="text">
                     Steak In has the perfect place to enjoy fine food and great cocktails with excellent service, in comfortable atmospheric surroundings. We have a soft dining room, combined with an open kitchen, coffee take out bar.
                     </p>
               </div>

               
                    <form action="" className="form-subscribe">
                       <input type="email" placeholder='Subscribe Our Newsletter' />
                    </form>
        </div>

        <div className="footer-bottom">
                  <p className="our-info">
                     22 Alnahas Building, Tanta, Egypt - <a href="#" className="contact">02 01065370701</a> - <a href="" className="email">7oroof@7oroof.com</a>
                  </p>

                  <p className="copyright">
                           © 2023 Gourmet, With Love by Sabira
                  </p>
        </div>
    </div>
  )
}

export default Footer