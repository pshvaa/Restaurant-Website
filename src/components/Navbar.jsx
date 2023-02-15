import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import logoBlack from '../images/logo-2.png'
import { SlBasket } from "react-icons/sl";
import { IoSearchSharp } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import './Navbar.css';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("About ");
  const[navbar, setNavbar] = useState(false)
  //logo scroll when active
  const[navbarLogo, setNavbarLogo] = useState(logo)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 73) {
      setNavbar(true);
    } 
    else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

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
  })

  return (
    // navbar navbar-expand-lg
    <nav className= {navbar ? "navbar navbar-expand-lg changeColor" : "navbar navbar-expand-lg"}>
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="/">
        <img src={navbarLogo} alt="Gourmet restaurant" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-uppercase active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-uppercase" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selectedItem}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/story" onClick={() => setSelectedItem(" Story")}>Our Story</Link></li>
            <li><Link className="dropdown-item" to="/chefs" onClick={() => setSelectedItem(" Chefs")}>Our Chefs</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/gallery" onClick={() => setSelectedItem("Gallery")}>Gallery</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase" to="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
        </li>

        <a className="book btn" to="#">Rezervasiya</a>
      </ul>


      <div className="head-icons d-flex justify-content-between align-items-center">
         <SlBasket/>
          <form  role="search">
             <button className="btn"><IoSearchSharp/></button>
          </form>
         < HiBars3CenterLeft />
      </div>
    </div>
  </div>
    </nav>

  )
}

export default Navbar