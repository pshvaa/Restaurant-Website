import React from 'react'
import './Reservation.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { BsPerson, BsCalendar, BsClock } from "react-icons/bs";
import MainButton from './MainButton';
import { formScheama } from '../schema/formSchema';
// import Pattern from '../images/img-pattern.svg'

const Reservation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm({ resolver: yupResolver(formScheama)});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (

    <>
      {/* <div className="section-divider"></div> */}
      <div className="reservation">
                 
                 <div className="container">
         
                   <div className="form reservation-form row bg-black-10">
         
                     <form  className="form-left col-12 col-md-6 col-lg-9 " onSubmit={handleSubmit(onSubmit)}>
         
                       <h2 className="headline-1 text-center">Online Qeydiyyat</h2>
         
                       <p className="form-text text-center">
                         Rezerv etmək üçün <a href="tel:+88123123456" className="link">+88-123-123456</a> ilə əlaqə saxlayın yaxud aşağıdakı formu doldurun:
                         
                       </p>
         
                       <div className="input-wrap row">
                         <input type="text" name="name" placeholder="Your Name" autocomplete="on" className="input-area col-12 col-md-5 my-input" {...register('name')}/>
                         {errors.name && <span className='form-error-mes'>{errors.name.message}</span>}

                         <input type="tel" name="phone" placeholder="Phone Number" autocomplete="on" className="input-area col-12 col-md-6"  {...register('Telefon nömrənizi daxil edin')}/>
                         {errors.name && <span className='form-error-mes'>{errors.phone.message}</span>}

                       </div>
         
                       <div className="input-wrap row">
         
                         <div className="icon-wrap col-12 col-md-6 col-lg-4">
                           {/* <ion-icon name="person-outline" aria-hidden="true"></ion-icon> */}
                           <BsPerson className='form-icon' />
         
                           <select name="person" className="input-area">
                             <option value="1-person">1 Person</option>
                             <option value="2-person">2 Person</option>
                             <option value="3-person">3 Person</option>
                             <option value="4-person">4 Person</option>
                             <option value="5-person">5 Person</option>
                             <option value="6-person">6 Person</option>
                             <option value="7-person">7 Person</option>
                           </select>

                           {/* <i class="fa-regular fa-chevron-down"></i> */}
                         </div>
         
                         <div className="icon-wrap col-12 col-md-6 col-lg-4">
                           {/* <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon> */}
                           <BsCalendar className='form-icon'/>
         
                           <input type="date" name="reservation-date" className="input-area" />
         
                           {/* <ion-icon name="chevron-down" aria-hidden="true"></ion-icon> */}
                         </div>
         
                         <div className="icon-wrap col-12 col-md-6 col-lg-4">
                           {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}
                           <BsClock className='form-icon' />
         
                           <select name="person" className="input-area">
                             <option value="08:00am">08 : 00 am</option>
                             <option value="09:00am">09 : 00 am</option>
                             <option value="010:00am">10 : 00 am</option>
                             <option value="011:00am">11 : 00 am</option>
                             <option value="012:00am">12 : 00 am</option>
                             <option value="01:00pm">01 : 00 pm</option>
                             <option value="02:00pm">02 : 00 pm</option>
                             <option value="03:00pm">03 : 00 pm</option>
                             <option value="04:00pm">04 : 00 pm</option>
                             <option value="05:00pm">05 : 00 pm</option>
                             <option value="06:00pm">06 : 00 pm</option>
                             <option value="07:00pm">07 : 00 pm</option>
                             <option value="08:00pm">08 : 00 pm</option>
                             <option value="09:00pm">09 : 00 pm</option>
                             <option value="10:00pm">10 : 00 pm</option>
                           </select>
         
                           {/* <ion-icon name="chevron-down" aria-hidden="true"></ion-icon> */}
                         </div>
         
                       </div>
         
                     <div className="input-wrap">
                         <textarea name="message" placeholder="Message" autocomplete="off" className="input-area">
                         </textarea>
                     </div>
         
                       {/* <button type="submit" className="btn btn-secondary">
                         <span className="text text-1">Book A Table</span>
         
                         <span className="text text-2" aria-hidden="true">Book A Table</span>
                       </button> */}
         
                       <div className="send-sec">
                           {/* <MainButton className="rez-btn" text = "Book a table" /> */}
                           <input type="submit" />
                       </div>
                     </form>
         
                     <div className="form-right col-12 col-md-6 col-lg-3  text-center">
         
                      
                           <h2 className="headline-1 text-center"></h2>
         
                          <div className="discount-info">
                              {/* <small className="dis-title">up to</small> */}
                              <div className="num">45%</div>
         
                              <small className="dis-title">endirim</small>
                          </div>
                         
                         <p className="contact-label">Rezerv sorğusu</p>
         
                       <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
         
                       <ul className="suggests">
                         <li className="suggest">Onlayn sifariş üçün keçərli deyil!
                         </li>
         
                         <li className="suggest">
                         </li>
         
                         <li className="suggest">Təklif yanvarın 25-də başa çatır.
                         </li>
                         
                       </ul>
         
                       {/* <div className="separator"></div> */}
         
                       {/* <p className="contact-label">Lunch Time</p>
         
                       <p className="body-4">
                              Monday to Sunday <br />
                              11.00 am - 2.30pm
                       </p>
         
                       <p className="contact-label">Dinner Time</p>
         
                       <p className="body-4">
                             Monday to Sunday <br />
                             05.00 pm - 10.00pm
                       </p> */}
                   </div>
         
                   </div>
         
                 </div>
         
                 <div className="section-divider"></div>
             </div>
    </>
  )
}

export default Reservation