import React from 'react'
import './MenuCard.css'

import '../receipts.json'
{/* Helelik melumatlari statik yaziram yuxaridaki jsondan gelmelidir */}
const MenuCard = ({receiptImage, name, price, content, type1}) => {
  return (
    <>
  {/* <h3 className="title-1">{type1}</h3> */}
  <div className="menu-card d-flex p-5 col-12 col-md-6 col-lg-6">
          <div className="left-side">
            <img src={receiptImage} alt="gourmet-menu" className="menu-food" />
          </div>

          <div className="right-side">
            <div className="rs-top d-flex justify-content-between">
                <p className="name">
                   {name}
                </p>

                <p className="price">{price}</p>
            </div>

            <div className="rs-bottom">
                 <small className="text">
                 {content}
                 </small>
            </div>
          </div>
    </div>

    </>

    
  )
}

export default MenuCard