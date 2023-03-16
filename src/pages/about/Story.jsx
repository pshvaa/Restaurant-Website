import React,{useState,useEffect} from 'react'
import OurStory from '../../components/OurStory'
import Reservation from '../../components/Reservation'
import SecondLoading from '../../components/SecondLoading'
import Services from '../../components/Services'
import StoryClub from '../../components/StoryClub'
import Testimonials from '../../components/Testimonials'
// Services islemir
const Story = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <>
   
    {loading ? (
        <SecondLoading />
      ) : (
  <>     
        <OurStory />
    
        <Testimonials />
       
    
    </>
  )}
  
    
    </>
    
    
  )
}

export default Story