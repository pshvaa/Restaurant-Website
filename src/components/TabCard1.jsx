import React from 'react'
import './TabCard1.css'
import '../receipts.json'

const TabCard1 = ({receiptImage, content, price, name}) => {
  return (
    <div className="tab-card-1 row col-12 col-md-6" data-aos="zoom-in">
        <div className="left-side col-12 col-md-6">
          <div className="recipes-inline">
            <div>
            <span>{price}</span>
              <p className='spec-name'>{name}</p>
              {/* <div className="pattern"></div> */}
              <p className="text small">{content}</p>
            </div>
         </div>

          </div>

          <div className="img-side col-12 col-md-6">
              <img src={receiptImage} alt="" />
        </div>
    </div>
  )
}

export default TabCard1