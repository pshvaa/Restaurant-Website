import React from 'react'
import './DishSpecial.css'
import MainButton from './MainButton'

const DishSpecial = () => {
  return (
    <div className="section special-dish text-center row" aria-labelledby="dish-label" data-aos="fade-down-right">


    <div className="special-dish-content bg-black-10 col-12 col-md-6">
      <div className="container">

        {/* <img src="./assets/images/badge-1.png" width="28" height="41" loading="lazy" alt="badge" className="abs-img" /> */}
        <p className="section-subtitle label-2">Günün favoriti </p>
        <h2 className="section-title">Crispy shrimp and grits</h2>

        <p className="section-text p-2">
              Monkfish, soğan, paella düyü, sarımsaq və hisə verilmiş paprika, qaymaqlı chesabeake crab dip ilə artishok, bişmiş və üstü çedar pendiri ilə, daldırma üçün xırtıldayan çörək ilə steak.
        </p>

        <div className="wrapper">
          <del className="del body-3">Bugünə özəl</del>

          <span className="span body-1">$20.00</span>
        </div>


        {/* btn-primary */}
        <MainButton text = "view all Menu" />

      </div>
    </div>
    


    <div className="special-dish-banner col-12 col-md-6">
      <img src="https://ongofood.com/wp-content/uploads/2020/11/Luxury-Dining-Experience-1-min.jpg" width="940" height="900" loading="lazy" alt="special dish"
        className="img-cover-special" />
    </div>

    {/* <img src="./assets/images/shape-4.png" width="179" height="359" loading="lazy" alt="" className="shape shape-1"/>

    <img src="./assets/images/shape-9.png" width="351" height="462" loading="lazy" alt="" className="shape shape-2"/> */}

  </div>
  )
}

export default DishSpecial