import React, {useState} from 'react'
import CountUp from 'react-countup';

import './ModalVideo.css'

import { VscPlayCircle } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const ModalVideo = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
  
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };
  return (
    <>
       <div className="section-divider"></div>
      <div className="modal-video-sec">
         <div className="title-text">
             <p className="section-subtitle text-center label-2">Bizi tanıyın</p>
             <h3 className='text-center' data-aos="fade-up"
     >Bizi Yaxından Tanıyın</h3>
         </div>
       <div className='modal-video'>
        <button onClick={openModal} className="play-button">
          <VscPlayCircle className='play-icon' />
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
       <p className='text-center display-4'>Yeni reseptlər, yeni layihələr yaratmaqla maraqlı və sevilən olmağa çalışırıq.</p>
       <div className='container row countup-container justify-content-around p-5' style={{fontSize:'5.3rem' }}>
        <div className="count col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
            <CountUp
            enableScrollSpy={true}
            start={0}
            end={150}
            duration={5}
            />
            <span className="plus">+</span>
            <p>GÜNLÜK SİFARİŞ</p>
            {/* <span className ="d-inline">+</span> */}
        </div>
        
        <div className="count col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
            <CountUp
            enableScrollSpy={true}
            start={0}
            end={82}
            duration={4}
            />
            <span className="plus">+</span>
            <p>GÜNLÜK SİFARİŞ</p>
            {/* <span className ="d-inline">+</span> */}
        </div>
        
        <div className="count col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
            <CountUp
            enableScrollSpy={true}
            start={0}
            end={35}
            duration={4}
            />
            <span className="plus">+</span>
            <p>Təcrübəli Şef</p>
            {/* <span className ="d-inline">+</span> */}
        </div>

        <div className="count col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
            <CountUp
            enableScrollSpy={true}
            start={0}
            end={5}
            duration={3}
            />
            {/* <span className="plus">+</span> */}
            <p className='p-2'>Filial</p>
            {/* <span className ="d-inline">+</span> */}
        </div>             
      </div>
       </div>
       <div className="section-divider"></div>
    </>
  )
}

export default ModalVideo