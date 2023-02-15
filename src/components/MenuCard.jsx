import React from 'react'
import './MenuCard.css'

import '../receipts.json'
{/* Helelik melumatlari statik yaziram yuxaridaki jsondan gelmelidir */}
const MenuCard = () => {
  return (
    <div className="menu-card d-flex p-5">
          <div className="left-side">
            <img src="http://templates.framework-y.com/gourmet/images/gallery/square-1.jpg" alt="" className="menu-food" />
          </div>

          <div className="right-side">
            <div className="rs-top d-flex justify-content-between">
                <p className="name">
                   Steamed king crab
                </p>

                <p className="price">9$</p>
            </div>

            <div className="rs-bottom">
                 <small className="text">
                 Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.
                 </small>
            </div>
          </div>
    </div>
  )
}

export default MenuCard