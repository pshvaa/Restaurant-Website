import React from 'react'
import './StoryClub.css'

const StoryClub = () => {
  return (
    <>
        <div className="our-club row">
        <div className="our-club-content section">
        <p className="handwriting">Some interesting information about us and our club</p>
        <h2 className="heading">ABOUT OUR CLUB</h2>
        <p className="text">
        Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor metus vel. Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod iaculis.
        </p>

        <img src="http://templates.framework-y.com/gourmet/images/sign-2.png" alt="Geremy Swirtzend" className="sign" />
        </div>
    </div>

    {/* <div className="section-divider"></div> */}
    </>
  )
}

export default StoryClub