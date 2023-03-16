import React from 'react'
import './Specialist.css'

const Specialist = () => {
  return (
    <div className='specials-section sec container'>
        <div className="bg-parallax ">
        <div className="recipes" data-aos="flip-up">
           <div className="recipes-inline">
            <p className="handwriting text-grey">Dadlı  Reseptlər</p>
           <h1 className="heading">
                Özəl Təkliflər
            </h1>

            {/* <img src="../images/pattern.png" className='pattern' /> */}

            <div className="recipes-table d-flex justify-content-between flex-wrap" id='recipes-table'>
                <div className="top-side row">
                    <div className="recipe-card col-12 col-md-6 d-flex">
                            <div className="rc-left-side">
                                  <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/06/granny-menu26.jpg" className='spec-img'  />
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
                                   <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/06/granny-menu10.jpg" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Smoked Paprika</h3>
                                     <span className="price">$26.00</span>
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
                                    <img src="https://img.freepik.com/premium-photo/uthappam-uttapam-is-type-dosa-from-south-india-which-is-thicker-with-tomato-onion-chilli-toppings_466689-16218.jpg" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Roasted Steak</h3>
                                     <span className="price">$32.50</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Toyuq və lobya, pendir, rozmarin və lobya paupieti.
                                      </p>
                                </div>
                            </div>
                    </div>

                    <div className="recipe-card col-12 col-md-6 d-flex">
                            <div className="rc-left-side">
                                   <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/06/granny-menu6.jpg" className='spec-img' />
                            </div>

                            <div className="rc-right-side">
                                <div className="rc-rs-top d-flex justify-content-between">
                                     <h3 className="name">Chesapeake crab</h3>
                                     <span className="price">$50.95</span>
                                </div>

                                <div className="rc-rs-bottom">
                                      <p className="text">
                                      Monkfish, soğan, paella düyü, hisə verilmiş paprika, zəncəfil
                                      </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </div>
            

        </div>
        </div>

        <div className="divider-shape-up"></div>
        <div className="divider-shape-down"></div>
    </div>
  )
}

export default Specialist