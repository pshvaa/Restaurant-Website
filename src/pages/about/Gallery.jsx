import React from 'react'
import ImageGallery from '../../components/ImageGallery'
import LoadMorePag from '../../components/LoadMorePag'
import PageParallax from '../../components/PageParallax/PageParallax'
import Posts from '../../components/Posts'
import '../../components/Gallery.css'



const Gallery = () => {
  return (
    <div className="gallery">
      {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">Stay Updated</h1>
             <p className="text text-center">Latest News & Events</p>
          </div>
       </div>
      </div> */}

      <PageParallax background="http://7oroof.com/demos/steakin/assets/images/banners/16.jpg" title= "Qalereya" subtitle="Latest News & Events" />
      {/* <Posts /> */}
      <ImageGallery />

      

      
      <div className="section-divider"></div>
    </div>

  )
}

export default Gallery