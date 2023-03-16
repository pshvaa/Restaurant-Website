import React from 'react'
import videoBg from '../../src/backvideo.mp4'

import './BackVideo.css'


const BackVideo = () => {
  return (
    <>
       <div className="background-video">
       <div className="video-overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        {/* <video autoPlay loop muted>
             <source src={videoBg} type='video/mp4'/>
        </video> */}
                 <div className="video-content">
                     <h1 className='title'>
Menyumuzu kəşf edin</h1>
                    <p className="subtitle">Mövsümi menyumuzdan həzz alın və təbiiliyin gözəlliyini hiss edin</p>
                 </div>
            <div className="bc-video-bottom">
            </div>
      </div>

    </>
  )
}

export default BackVideo