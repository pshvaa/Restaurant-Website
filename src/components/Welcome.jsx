import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome-section sec row d-flex">
        
        <div className="left-text col-12 col-md-6 col-lg-6 pt-5">
                   <h1 className="heading">
                      Welcome To GOURMET
                   </h1>

                   {/* <img src="../images/pattern.png"/> */}
                   <img src="http://7oroof.com/demos/steakin/assets/images/background/shapes/shape-4.png"/>


                   <p className="text">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus iusto quod eius eligendi non nostrum sint doloremque vitae eos labore voluptas doloribus accusamus animi, omnis tenetur alias minima libero cupiditate veniam assumenda tempora totam, officia similique. Qui, totam rerum itaque nisi magni perspiciatis veritatis mollitia quisquam, beatae ipsam porro a?
                   </p>

                   <a to="#" className='btn text-uppercase myBtn'>Book A Table</a>
            </div>

            <div className="right-img col-12 col-md-6 col-lg-6">
                   <img src="https://corefoodconsulting.com/wp-content/uploads/2022/09/luxury-restaurant-dining-e1667067354378.jpg"  className="img-left" />
                   <img src="https://rare-gallery.com/uploads/posts/508321-food-luxury.jpg"  className="img-right" />
            </div>
        </div>
          
  )
}

export default Welcome