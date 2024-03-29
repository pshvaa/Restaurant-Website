import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

//Components in Route system
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/about/Story';
import Chefs from './pages/about/Chefs';
import Gallery from './pages/about/Gallery';
import Menu from './pages/Menu';
import Blogs from './pages/Blogs';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage.jsx'


// Components list
import Navbar from './components/Navbar';
// import Introduction from './components/Introduction';
// import Welcome from './components/Welcome';
// import Specialist from './components/Specialist';
import Testimonials from './components/Testimonials';
import Updates from './components/Updates';
import Footer from './components/Footer'
import ScrollTopArrow from './components/ScrollTopArrow';
import ComingSoonPage from './pages/ComingSoonPage';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      
  
         <BrowserRouter>
           
            <Navbar />

            <Routes >
                <Route path ='/' element = {<Home />} />
                <Route path = '/story' element = {<Story />} />
                <Route path = '/chefs' element = {<Chefs />} />
                <Route path = '/gallery' element = {<Gallery />} />
                <Route path = '/soon' element = {<ComingSoonPage />} />
                <Route path='/menu' element = {<Menu />} />
                <Route path = '/blogs' element = {<Blogs />} />
                <Route path = '/faq' element = {<Faq />} />
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '*' element = {<NotFoundPage />} />
            </Routes>
            <ScrollTopArrow />
            <Footer />
         </BrowserRouter> 
       {/* <Navbar /> */}
       {/* <Introduction />
       <Welcome />
       <Specialist />
       <Testimonials />
       <Updates />
       <Footer /> */}
      

    </> 
  );
}

export default App;
