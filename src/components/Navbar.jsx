import React, {useEffect, useRef, useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../images/logo.png';
import logoBlack from '../images/logo-2.png'
import { SlBasket } from "react-icons/sl";
import { IoSearchSharp, IoRestaurant } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IconContext } from "react-icons";
import './Navbar.css';
// import BookTableBtn from './BookTableBtn';
// import MainButton from './MainButton';
// import SecondMainButton from './SecondMainButton';
import Resbtn from './Resbtn';
import ResBtntwo from './ResBtntwo';
import DishSpecial from './DishSpecial';
import OffCanvas from './OffCanvas';




/* .navbar.colorChange{
    background-color: rgba;
} */
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("About ");

  // change nav color when scrolling
  const[colorChange, setColorChange] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 60) {
      setColorChange(true);
    } 
    else {
      setColorChange(false);
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  },[])


  //logo scroll when active
  const[navbarLogo, setNavbarLogo] = useState(logo)
  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 66) {
      setNavbarLogo(logoBlack);
    } 
    else {
      setNavbarLogo(logo);
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  },[])

  //change btn on scroll
  
  const[resBtn, setResBtn] = useState(Resbtn)
  
  const changeButton = () => {
    if (window.scrollY >= 66) {
      setResBtn(ResBtntwo);
    } 
    else {
      setResBtn(Resbtn);
    }
  }

  useEffect(() => {
    changeButton()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeButton)
  },[])


  const overlaySearch = useRef()

  function showOverlay(e) {
        const clickedPlace = e.target 
        
        if (clickedPlace.classList.contains('btn-search')){
          overlaySearch.current.classList.add('show-overlay')
        }
  }

  function closeOverlay(e) {
    const clickedPlace = e.target 
        
    if (clickedPlace.classList.contains('cross-icon')){
      overlaySearch.current.classList.remove('show-overlay')
    }
  }

  // Off Canvas

  const offCanvas = useRef()
 
  function showCanvas(e) {
    const clickedPlace = e.target 
    
    if (clickedPlace.classList.contains('burger--icon')){
      offCanvas.current.classList.add('show-canvas') 
    }
}

function closeCanvas(e) {
const clickedPlace = e.target 
    
if (clickedPlace.classList.contains('cross-icon')){
  offCanvas.current.classList.remove('show-canvas')
}
}

// Sag Canvas

const rightCanvas = useRef()
 
function openCanvas(e) {
  const clickedPlace = e.target 
  
  if (clickedPlace.classList.contains('nav-i-blog')){
    offCanvas.current.classList.add('open-canvas') 
  }
}

function closCanvas(e) {
const clickedPlace = e.target 
  
if (clickedPlace.classList.contains('cross-icon')){
offCanvas.current.classList.remove('open-canvas')
}
}

// const allMenu = useRef()
 
//   function showCanvas(e) {
//     const clickedPlace = e.target 
    
//     if (clickedPlace.classList.contains('my-nav')){
//       offCanvas.current.classList.add('show-canvas')
//     }
// }

// function closeCanvas(e) {
// const clickedPlace = e.target 
    
// if (clickedPlace.classList.contains('my-nav')){
//   offCanvas.current.classList.remove('show-canvas')
// }
// }

//Styling react icons
// function changeSearchIcon() {
//   return (
//     <IoSearchSharp.Provider
//       value={{ color: 'blue', size: '50px' }}
//     >
//       <div>
//         <IoSearchSharp/>
//       </div>
//     </IoSearchSharp.Provider>
//   );
// }





  return (
    <>
    {/* navbar navbar-expand-lg */}
    <nav className= "navbar navbar-expand-lg">
  <div className={colorChange ? "container-fluid px-5 colorChange" : "container-fluid px-5"}>
    <a className="navbar-brand" href="/">
        <img src={navbarLogo} alt="Gourmet restaurant" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" >
         <span className="navbar-toggler-icon burger--icon" onClick={showCanvas} ></span>
    </button>
    
    <div className="canvas-menu" ref={offCanvas}>
             <IoRestaurant className='cross-icon' onClick={closeCanvas} />
              <div className="sidebar">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">

<li className="nav-item">
 <NavLink className="nav-link canvas-link" aria-current="page"  activeclassname="active" to="/">Home</NavLink>
{/* classname active getdi */}
</li>
<li className="dropdown-me">
<NavLink className="nav-link canvas-link" activeclassname="active" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{selectedItem}
</NavLink>
<ul className="dropdown-canvas">
<li><Link className="dropdown-item" to="/story" onClick={() => setSelectedItem("Hekayəmiz")}>Hekayəmiz</Link></li>
<li><Link className="dropdown-item" to="/chefs" onClick={() => setSelectedItem("Şeflərimiz")}>Şeflərimiz</Link></li>
<li><Link className="dropdown-item" to="/gallery" onClick={() => setSelectedItem("Qalereya")}>Qalereya</Link></li>
<li><Link className="dropdown-item" to="/soon" onClick={() => setSelectedItem("Coming Soon")}>Coming Soon</Link></li>
</ul>
</li>
<li className="nav-item">
<NavLink className="nav-link canvas-link" activeclassname="active" to="/menu">Menu</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link canvas-link" activeclassname="active" to="/blogs">Blogs</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link canvas-link" activeclassname="active" to="/faq">Faq</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link canvas-link" activeclassname="active" to="/contact">Contact</NavLink>
</li>


                 </ul>
              </div>
          </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-nav">

        <li className="nav-item">
          <NavLink className="nav-link text-uppercase " aria-current="page"  activeclassname="active" to="/">Home
</NavLink>
          {/* classname active getdi */}
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link text-uppercase" activeclassname="active" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedItem}
          </NavLink>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" activeclassname="active" to="/story" onClick={() => setSelectedItem("Hekayəmiz")}>Hekayəmiz</Link></li>
            <li><Link className="dropdown-item" activeclassname="active" to="/chefs" onClick={() => setSelectedItem("Şeflərimiz")}>Şeflərimiz</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" activeclassname="active" to="/gallery" onClick={() => setSelectedItem("Qalereya")}>Qalereya</Link></li>
            <li><Link className="dropdown-item" activeclassname="active" to="/soon" onClick={() => setSelectedItem("Tezliklə")}>Tezliklə</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" activeclassname="active" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" activeclassname="active" to="/blogs">Bloqlar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" activeclassname="active" to="/faq">FAQ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" activeclassname="active" to="/contact">Əlaqə</NavLink>
        </li>

        {/* <hr /> */}

        {/* <a className="book btn" to="#">Rezervasiya</a> */}
        {/* <div className="underbar"></div> */}
        {/* <BookTableBtn /> */}
        <div>
          {resBtn}
        </div>
      </ul>


      <div className="head-icons d-flex justify-content-between align-items-center">
         
          <IconContext.Provider value={{ className: "top-react-icons" }}>
          {/* <SlBasket className='nav-icon'/> */}

          {/* <input type="text" placeholder='Axtar' /> */}
         
          <IoSearchSharp className="btn-search nav-icon" onClick={showOverlay} />
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="btn-search nav-icon" onClick={showOverlay} /> */}
          <div className="search-overlay" ref={overlaySearch}>
              <IoRestaurant className='cross-icon' onClick={closeOverlay} />
             <form action='#' className='search-form' role="search">
                <input type="text" placeholder='Search' required />
                <button type="submit"><IoSearchSharp/></button>
            </form>
          </div>
          
          
           
          </IconContext.Provider>
  
    </div>
    
       
  </div>
  </div>
    </nav>
    </>
  )
}

export default Navbar