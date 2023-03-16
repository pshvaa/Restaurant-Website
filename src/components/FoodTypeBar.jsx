import React from 'react'
import './FoodTypeBar.css'

const FoodTypeBar = () => {
  return (
    <div className="bar-container">
    <p className="handwriting text-center">Top skills</p>
    <h1 className="title-text text-center heading brown">Yaradıcı Şeflərimiz</h1>
    <div className="pattern text-center"></div>
    <p className="text text-center">Gourmet–şəhərin qastronomik mədəniyyətində yeni bir ad!
    Gourmet restoranının ab-havası yüzilliklərdən bəri nəsillərə ötürülən kulinariya irsinin bütün ləzzətini, rəngini və tarixi dəyərini ən yaxşı şəkildə çatdırır və təamlarımız
    bugünədək görmədiyiniz fərqli bir dad çalarını yaradacaqlar.</p>

    <div className="skills row justify-content-around">
    <div className="skill-box col-12 col-md-6 col-lg-5">
        <div className="d-flex justify-content-between align-items-center">
           <span className="title">MİLLİ MƏTBƏXİ</span>
           <span className="value">95%</span>
        </div>
        <div className="skill-bar">
            <span className="skill-per thai">
                <span className="tooltip">95%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6 col-lg-5">
          <div className="d-flex justify-content-between align-items-center">
               
               <span className="title">AVROPA MƏTBƏXİ</span>
               <span className="value">80%</span>
          </div>
        <div className="skill-bar">
            <span className="skill-per china">
                <span className="tooltip">80%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6 col-lg-5">
          <div className="d-flex justify-content-between align-items-center">
               
               <span className="title">ASİYA MƏTBƏXİ</span>
               <span className="value">60%</span>
          </div>
        <div className="skill-bar">
            <span className="skill-per arabic">
                <span className="tooltip">60%</span>
            </span>
        </div>
    </div>
    <div className="skill-box col-12 col-md-6 col-lg-5">
           <div className="d-flex justify-content-between align-items-center">
               
               <span className="title">FAST FOOD</span>
               <span className="value">40%</span>
          </div>
        
        <div className="skill-bar">
            <span className="skill-per fast">
                <span className="tooltip">40%</span>
            </span>
        </div>
    </div>
    </div>

    <div className="section-divider"></div>
</div>
  )
}

export default FoodTypeBar