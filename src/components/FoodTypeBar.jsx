import React from 'react'
import './FoodTypeBar.css'

const FoodTypeBar = () => {
  return (
    <div className="bar-container">
    <p className="handwriting text-center">Top skills</p>
    <h1 className="title-text text-center">Creative Chefs</h1>
    <div className="pattern text-center"></div>
    <p className="text text-center">Granny was the first retaurant to open in Egypt, the resturant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and on site coffee roastery.</p>

    <div className="skills row">
    <div className="skill-box col-12 col-md-6">
        <span className="title">THAI FOOD</span>
        <div className="skill-bar">
            <span className="skill-per html">
                <span className="tooltip">95%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6">
        <span className="title">CHINESE FOOD</span>
        <div className="skill-bar">
            <span className="skill-per css">
                <span className="tooltip">80%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6">
        <span className="title">ARABIC FOOD</span>
        <div className="skill-bar">
            <span className="skill-per javascript">
                <span className="tooltip">60%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6">
        <span className="title">FAST FOOD</span>
        <div className="skill-bar">
            <span className="skill-per nodejs">
                <span className="tooltip">40%</span>
            </span>
        </div>
    </div>
    </div>
</div>
  )
}

export default FoodTypeBar