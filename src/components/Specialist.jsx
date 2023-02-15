import React from 'react'
import './Specialist.css'

const Specialist = () => {
  return (
    <div className='specials-section sec container'>
        <div className="bg-parallax "></div>
        <div className="recipes">
           <div className="recipes-inline">
           <h1 className="heading">
                Our Special Dishes
            </h1>

            <img src="../images/pattern.png" className='pattern' />

            <div className="recipes-table d-flex justify-content-between flex-wrap" id='recipes-table'>
                <div className="top-side row">
                    <div className="recipe-card col-12 col-md-6 col-lg-3 d-flex">
                            <div className="rc-left-side">
                                  <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className='spec-img'  />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Grilled Fillet</h3>
                                     <span className="price">$26.95</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Pork fillet, ginger, garlic, honey, pepper & canola oil, Pork fillet, ginger.
                                      </p>
                                </div>
                            </div>
                    </div>

                    <div className="recipe-card col-12 col-md-6 col-lg-3 d-flex">
                            <div className="rc-left-side">
                                   <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Grilled Fillet</h3>
                                     <span className="price">$26.95</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Pork fillet, ginger, garlic, honey, pepper & canola oil, Pork fillet, ginger.
                                      </p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="bottom-side row">
                    <div className="recipe-card col-12 col-md-6 d-flex">
                            <div className="rc-left-side">
                                    <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Grilled Fillet</h3>
                                     <span className="price">$26.95</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Pork fillet, ginger, garlic, honey, pepper & canola oil, Pork fillet, ginger.
                                      </p>
                                </div>
                            </div>
                    </div>

                    <div className="recipe-card col-12 col-md-6 d-flex">
                            <div className="rc-left-side">
                                   <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Grilled Fillet</h3>
                                     <span className="price">$26.95</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Pork fillet, ginger, garlic, honey, pepper & canola oil, Pork fillet, ginger.
                                      </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </div>
            

        </div>
    </div>
  )
}

export default Specialist