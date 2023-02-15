import React from 'react'
import './TabCard2.css'
import '../receipts.json'

const TabCard2 = ({receiptImage, content, price, name}) => {
  return (
    <div className="tab-card-2 d-flex col-12 col-md-6 col-lg-4">

          <div className="img-side">
              <img src={receiptImage} alt="" />
        </div>

        <div className="left-side">
          <div className="recipes-inline">
            <div>
            <span>{price}</span>
              <p >{name}</p>
              <p className="text small">{content}</p>
            </div>
         </div>

          </div>
    </div>
  )
}

export default TabCard2