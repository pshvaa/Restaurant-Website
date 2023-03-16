import React, {useState, useEffect} from 'react'
import BackVideo from '../components/BackVideo'
// import Booking from '../components/Booking'
import DishSpecial from '../components/DishSpecial'
import FoodTypeBar from '../components/FoodTypeBar'
import MenuCard from '../components/MenuCard'
import OurMenu from '../components/OurMenu'
// import Posts from '../components/Posts'
import Reservation from '../components/Reservation'
import SecondLoading from '../components/SecondLoading'
import Transitions from '../components/Transitions'

import './Menu.css'

const Menu = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
  
    <>
      {loading ? (
        <SecondLoading />
      ) : (
      <Transitions>
      <div className="menu-section">
      {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">MENU GRId</h1>
             <p className="text text-center">Menu and Portfolio</p>
          </div>
       </div>
      </div> */}

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

      <BackVideo />

      <OurMenu />

      {/* <Booking /> */}

      {/* <Posts /> */}


      <FoodTypeBar />

      {/* <Reservation /> */}
    </div>
      </Transitions>)
}
    </>
  )
}

export default Menu