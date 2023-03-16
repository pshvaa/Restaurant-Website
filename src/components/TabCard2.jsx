import React from 'react'
import './TabCard2.css'
import '../receipts.json'

const TabCard2 = ({receiptImage, content, price, name}) => {
  return (
    <div className="tab-card-2 row col-12 col-md-6"  data-aos="zoom-in">

          <div className="img-side col-12 col-md-6">
              <img src={receiptImage} alt="" />
        </div>

        <div className="left-side col-12 col-md-6">
          <div className="recipes-inline">
            <div>
            <span>{price}</span>
              <p className='spec-name'>{name}</p>
              <p className="text small">{content}</p>
            </div>
         </div>

          </div>
    </div>
  )
}

export default TabCard2