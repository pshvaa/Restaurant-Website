import React from 'react'
// import DateTimeDisplay from '../components/ComingSoon/DateTimeDisplay';

import CountDownTimer from '../components/ComingSoon/CountdownTimer'

import '../components/ComingSoon/ComingSoon.css'

const ComingSoonPage = () => {
  const BIR_AY_SONRA = 30 * 24 * 60 * 60 * 1000;
  const INDIKI_VAXT = new Date().getTime();

  const BIR_AYDAN_SONRAKI_VAXT = INDIKI_VAXT 
  + BIR_AY_SONRA
  return (
    <div className='coming-soon'>
         <div className="section-divider"></div>
         <h3 className="soon-title">
             Coming Soon
         </h3>

         <div className="sunbul">
          <img src="https://7oroof.com/tfdemos/wp-granny/wp-content/themes/granny/assets/images/icon-h1.png"  />
         </div>

         <span className="text">
         Steak In has the perfect place to enjoy fine food and great cocktails with excellent service, in comfortable atmospheric surroundings. We have a soft dining room, combined with an open kitchen, coffee take out bar and alovely awesome on site coffee roastery.
         </span>
         <CountDownTimer targetDate={BIR_AYDAN_SONRAKI_VAXT} />

         <div className="section-divider"></div>
         <div className="section-divider"></div>
         <div className="section-divider"></div>
    </div>

    
  )
}

export default ComingSoonPage