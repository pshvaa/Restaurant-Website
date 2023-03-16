import React from 'react'
import Navbar from '../components/Navbar'
import '../components/NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <>

    <Navbar />
    <div className="error-404">
        <p className="error-title" title='404'>404</p>
        <span className="icon-404"></span>
        <div className="error-text">
            Granny was the first retaurant to open in Egypt, the resturant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and on site coffee roastery.
        </div>


        <a to="/" className="btn error-btn">Back to home</a>
    </div>


    </>
  )
}

export default NotFoundPage