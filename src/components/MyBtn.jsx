import React from 'react'
import './MyBtn.css'

const MyBtn = ({text}) => {
  return (
    <div className="MtBtn">
        <a href='#' className='mybtn text-uppercase myBtn text-grey'>{text}</a>
    </div>
  )
}

export default MyBtn