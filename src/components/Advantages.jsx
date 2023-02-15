import React from 'react'
import './Advantages.css'
const Advantages = () => {
  return (
    <div id="features" className="bg-cover">
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text text-center">
                    <h1 className="text-white">Why to choose us?</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint
                        temporibus natus optio
                        eveniet nobis accusantium?</p>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            <i className="ri-wifi-fill"></i>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Free Wifi</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            <i className="ri-timer-2-fill"></i>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Fast Delivery</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            <i className="ri-user-5-fill"></i>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Friendly Staff</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            <i className="ri-shield-star-fill"></i>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Highly Rated</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages