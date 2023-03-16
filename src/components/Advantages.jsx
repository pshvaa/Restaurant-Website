import React from 'react'
import './Advantages.css'
const Advantages = () => {
  return (
    <div id="features" className="bg-cover">
        <div className="section-divider"></div>
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text text-center">
                    <h1 className="text-white heading">Üstünlüklərimiz</h1>
                    <p className="text-white advantage">Biz bütün peşə və əhalinin müxtəlif seqmentləri tərəfindən etibar qazanan Azərbaycan brendiyik. Biz demokratik bir məkanıq! Biz yeməklərimizin dad və keyfiyyətinə görə məsuliyyət daşıyırıq. Biz həyatın nəbzini duyuruq və yeni reseptlər, yeni layihələr yaratmaqla maraqlı və sevilən olmağa çalışırıq.</p>
                </div>
            </div>
            <div className="row gy-4 ustunlukler">
                <div className="col-lg-3 col-sm-6" data-aos="fade-up-right">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            {/* <i className="ri-wifi-fill"></i> */}
                            <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/03/granny-icontext1.png"/>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Free Wifi</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up-left">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            {/* <i className="ri-timer-2-fill"></i> */}
                            <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/03/granny-icontext4.png"/>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Fast Delivery</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up-right">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            {/* <i className="ri-user-5-fill"></i> */}
                            <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/03/granny-icontext3.png"/>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Beynəlxalq mətbəx
</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up-left">
                    <div className="feature p-4 text-center">
                        <div className="feature-icon">
                            {/* <i className="ri-shield-star-fill"></i> */}
                            <img src="	https://7oroof.com/tfdemos/wp-granny/wp-content/uploads/2017/03/granny-icontext2.png"/>
                        </div>
                        <h4 className="text-white mt-4 mb-2">Daima təzə və
sağlam inqredientlər</h4>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-divider"></div>
    </div>
  )
}

export default Advantages