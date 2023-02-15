import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';

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



function App() {
  return (
    <>
      
  
         <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path ='/' element = {<Home />} />
                <Route path = '/story' element = {<Story />} />
                <Route path = '/chefs' element = {<Chefs />} />
                <Route path = '/gallery' element = {<Gallery />} />
                <Route path='/menu' element = {<Menu />} />
                <Route path = '/blogs' element = {<Blogs />} />
                <Route path = '/faq' element = {<Faq />} />
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '*' element = {<NotFoundPage />} />
            </Routes>
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
