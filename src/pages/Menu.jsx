import React from 'react'
import FoodTypeBar from '../components/FoodTypeBar'
import MenuCard from '../components/MenuCard'
import OurMenu from '../components/OurMenu'
import Reservation from '../components/Reservation'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu-section">
      <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">MENU GRId</h1>
             <p className="text text-center">Menu and Portfolio</p>
          </div>
       </div>
      </div>

      {/* <div className="all-menu">
      <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu food-menu"></div>
          <div className="parallax-title">
             <div className="menu">
            <div className="first-dishes">
                  <p className="handwriting">Slow cook meals and fresh fishes</p>
                  <h1 className="heading">MEAT & FIRST DISHES</h1>
                  <MenuCard />
                  <MenuCard />
            </div>

            <div className="burgers">
                  
            </div>

            <div className="desserts">

            </div>
             </div>
          </div>
       </div>
      </div>
      </div> */}

      <OurMenu />

      <FoodTypeBar />

      <Reservation />
    </div>
  )
}

export default Menu