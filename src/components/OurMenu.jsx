import React from 'react'
import receiptData from '../receipts.json'
import MenuCard from './MenuCard'


import './OurMenu.css'
import SecondMainButton from './SecondMainButton';

const OurMenu = () => {
  return (

    <>
    <div className="section selection" aria-label="menu-label" id="menu-selection">
    
    <div className="menu--parallax"></div>
    <div className="">

      <p className="section-subtitle text-center label-2">Xüsusi Menyu</p>

      <h2 className="menu-header text-center">Səhər yeməyi</h2>
      {/*<li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Olivas Rellenas</a>
                </h3>

                <span className="span title-2">$25.00</span>
              </div>

              <p className="card-text label-1">
                Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
              </p>

            </div>

          </div>
        </li> */}

      {/* <div className="img-side-menu col-12 col-md-6">
        <img src="http://templates.framework-y.com/gourmet/images/food-3.png" alt="breakfast" />
      </div> */}

      {/* <ul className="menu-list row">

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="https://www.birchrestaurant.com/wp-content/uploads/2022/10/Lake-Havasu-City-AZ-Best-Restaurant.jpg" width="100" height="100" loading="lazy" alt="Greek Salad"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Greek Salad</a>
                </h3>

                <span className="badge label-1">Seasonal</span>

                <span className="span title-2">$25.50</span>
              </div>

              <p className="card-text label-1">
                Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
              </p>

            </div>

          </div>
        </li>

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Lasagne"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Lasagne</a>
                </h3>

                <span className="span title-2">$40.00</span>
              </div>

              <p className="card-text label-1">
                Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
              </p>

            </div>

          </div>
        </li>

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Butternut Pumpkin</a>
                </h3>

                <span className="span title-2">$10.00</span>
              </div>

              <p className="card-text label-1">
                Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.
              </p>

            </div>

          </div>
        </li>

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Tokusen Wagyu</a>
                </h3>

                <span className="badge label-1">New</span>

                <span className="span title-2">$39.00</span>
              </div>

              <p className="card-text label-1">
                Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
              </p>

            </div>

          </div>
        </li>

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Olivas Rellenas</a>
                </h3>

                <span className="span title-2">$25.00</span>
              </div>

              <p className="card-text label-1">
                Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
              </p>

            </div>

          </div>
        </li>

        <li className='col-12 col-md-6'>
          <div className="menu-card hover:card">

            <figure className="card-banner img-holder">
              <img src="http://192.168.1.103:5500/assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Opu Fish"
                className="img-cover" />
            </figure>

            <div>

              <div className="title-wrapper">
                <h3 className="title-3">
                  <a href="#" className="card-title">Opu Fish</a>
                </h3>

                <span className="span title-2">$49.00</span>
              </div>

              <p className="card-text label-1">
                Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
              </p>

            </div>

          </div>
        </li>

      </ul>

      <p className="menu-text text-center">
        During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
      </p> */}

      <div className="menyu-cards row">
            {
            receiptData.filter(p => {
              return (p.type1 == 'breakfast' || p.type2 == 'breakfast' || p.type3=='breakfast') 
            })
            .map(p => {
              return(
                <>
                     {
                      <MenuCard receiptImage={p.receiptImage} name={p.name} price={p.price} content={p.content} />
                     }
                </>
              )
            })
            }
      </div>
       

       <span className="double-border-separator"></span>
      <p className="text-center display-2 menu-header">Nahar və Qəlyanaltı</p>

      <div className="menyu-cards row">
         {
            receiptData.filter(p => {
              return (p.type1 == 'lunch' || p.type2 == 'lunch' || p.type3=='lunch' || p.type1 == 'dinner' || p.type2 == 'dinner' || p.type3=='dinner') 
            })
            .map(p => {
              return(
                <>
                     {
                      <MenuCard receiptImage={p.receiptImage} name={p.name} price={p.price} content={p.content} />
                     }
                </>
              )
            })
            }
      </div>

       
       <span className="double-border-separator"></span>
      <p className="menu-header text-center">Desert və İçkilər</p>
      <div className="menyu-cards row">
         {
            receiptData.filter(p => {
              return (p.type1 == 'dessert' || p.type2 == 'dessert'  || p.type1 == 'drink' || p.type2 == 'drink') 
            })
            .map(p => {
              return(
                <>
                     {
                      <MenuCard receiptImage={p.receiptImage} name={p.name} price={p.price} content={p.content} />
                     }
                </>
              )
            })
            }
      </div>

      {/* btn-primary sildim */}
      <SecondMainButton text="Hamısına bax" />
      {/* <img src="http://192.168.1.103:5500/assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape"
        className="shape shape-2 move-anim" />
      <img src="http://192.168.1.103:5500/assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape"
        className="shape shape-3 move-anim" /> */}

    </div>
  </div>
    </>
    
  )
}

export default OurMenu