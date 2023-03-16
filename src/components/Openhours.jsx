import React from 'react'
import './Openhours.css'

const Openhours = () => {
  return (
    <div className="open-hours">
          <div className="container row flex-wrap">
              <div className="col-md-1 gif-clock">
                  <img src="http://templates.framework-y.com/gourmet/images/clock.gif" alt="" className="gif" />
              </div>
               <div className="col-12 col-md-2 text-center title vaxt p-2">
                  <p>Bizim açılış</p>
                  <h1>Saatlarımız</h1>
               </div>

               <div className="col-12 col-md-9 text-center p-5">
                 {/* <table className="table table-hover">
                   <thead>
                     <tr>
                       <th>Gün</th>
                       <th>Monday</th>
                       <th>Tuesday</th>
                       <th>Wednesday</th>
                       <th>Thursday</th>
                       <th>Friday</th>
                       <th>Saturday</th>
                       <th>Sunday</th>
                     </tr>
                   </thead>
                   <tbody>
                      <tr>
                        <th>Lunch</th>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                      </tr>

                      <tr>
                        <th>Dinner</th>
                        <td>Closed</td>
                        <td>18pm - 23pm</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                        <td>11am -15am</td>
                      </tr>
                   </tbody>
                 </table> */}

{/* <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Gün</th>
      <th scope="col">Bazar Ertəsi</th>
      <th scope="col">Çərsənbə axşamı</th>
      <th scope="col">Çərsənbə</th>
      <th scope="col">Cümə axşamı</th>
      <th scope="col">Cümə</th>
      <th scope="col">Şənbə</th>
      <th scope="col">Bazar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nahar</th>
      <td>11am -15am</td>
      <td>11am -15am</td>
      <td>11am -15am</td>
      <td>11am -15am</td>
      <td>11am -15am</td>
      <td>11am -15am</td>
      <td>11am -15am</td>
    </tr>
    <tr>
      <th scope="row">Səhər Yemə</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}

<table>
  {/* <caption>Statement Summary</caption> */}
  <thead>
    <tr>
      <th scope="col">Gün</th>
      <th scope="col">Səhər yeməyi</th>
      <th scope="col">Nahar</th>
      <th scope="col">Şam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Gün">Bazar Ertəsi</td>
      <td data-label="Səhər yeməyi">08:00-10:00</td>
      <td data-label="Nahar">12:00-15:30</td>
      <td data-label="Şam">17:00-22:00</td>
    </tr>
    <tr>
      <td scope="row" data-label="Gün">Çərşənbə axşamı</td>
      <td data-label="Səhər yeməyi">09:00-11:00</td>
      <td data-label="Nahar">13:00-15:30</td>
      <td data-label="Şam">19:00-22:30</td>
    </tr>
    <tr>
      <td scope="row" data-label="Gün">Çərşənbə</td>
      <td data-label="Səhər yeməyi">09:00-11:30</td>
      <td data-label="Nahar">12:00-15:30</td>
      <td data-label="Şam">19:00-23:00</td>
    </tr>
    <tr>
      <td scope="row" data-label="Gün">Cümə axşamı</td>
      <td data-label="Səhər yeməyi">10:00-11:30</td>
      <td data-label="Nahar">13:00-14:00</td>
      <td data-label="Şam">17:00-23:00</td>
    </tr>
    <tr>
      <td scope="row" data-label="Gün">Cümə</td>
      <td data-label="Səhər yeməyi">08:00-11:30</td>
      <td data-label="Nahar">13:00-14:40</td>
      <td data-label="Period">17:00-22:30</td>
    </tr>
    
  </tbody>
</table>

               </div>
          </div>


          <div className="section-divider"></div>
          {/* <div className="section-divider"></div> */}
    </div>
  )
}

export default Openhours