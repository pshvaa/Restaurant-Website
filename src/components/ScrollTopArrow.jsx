import React, {useState} from 'react'
import { SlArrowUp } from "react-icons/sl";
import './ScrollTopArrow.css'

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
     if(!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
     }
     else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
     }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  window.addEventListener('scroll', checkScrollTop)
  return (
   <div className="scrollTop">
      <SlArrowUp
   onClick={scrollTop} 
   style={{height: 40, display: showScroll ? 'block' : 'none'}}
/>
   </div> 
  )
}

export default ScrollTopArrow