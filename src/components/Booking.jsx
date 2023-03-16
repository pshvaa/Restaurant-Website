import React, { useState } from 'react';
// import data
import { reservationData } from '../data';
// import datepicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import timepicker css
import './Timepicker.css';
// import icons
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants elemedim
import { fadeIn, staggerContainer } from './Transitions';

const Booking = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // date state
  const [startDate, setStartDate] = useState(new Date());
  // clock state
  const [value, setValue] = useState('10:00');

  return (
    <>
        <section className='booking bg-dark'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>
          {/* model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt='' />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
        >
          <div className='d-flex row'>
            {/* datepicker */}
            <div className='col-12 col-md-4'>
              <div className='date-picker d-flex'>
                <FaCalendar />
                <div>Tarix seçin</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div className='col-12 col-md-4'>
              <div className='time-picker d-flex'>
                <FaClock />
                <div>Vaxt seçin</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* person number */}
            <div className='col-12 col-md-4'>
              <div className='person-number d-flex'>
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input className='input' type='text' placeholder='1' />
            </div>
          </div>
          {/* button */}
          <div className=''>
            <button className='btn capitalize w-full lg:w-auto'>
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>

    {/* <div className="input-wrapper row">

                <div className="icon-wrapper col-12 col-md-6 col-lg-4">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <BsPerson className='form-icon' />

                  <select name="person" className="input-field">
                    <option value="1-person">1 Person</option>
                    <option value="2-person">2 Person</option>
                    <option value="3-person">3 Person</option>
                    <option value="4-person">4 Person</option>
                    <option value="5-person">5 Person</option>
                    <option value="6-person">6 Person</option>
                    <option value="7-person">7 Person</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div className="icon-wrapper col-12 col-md-6 col-lg-4">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                  <BsCalendar className='form-icon'/>

                  <input type="date" name="reservation-date" className="input-field" />

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div className="icon-wrapper col-12 col-md-6 col-lg-4">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <BsClock className='form-icon' />

                  <select name="person" className="input-field">
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

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

              </div> */}
    
    </>
  );
};

export default Booking;
