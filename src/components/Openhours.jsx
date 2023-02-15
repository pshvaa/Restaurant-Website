import React from 'react'
import './Openhours.css'

const Openhours = () => {
  return (
    <div className="open-hours">
          <div className="container row">
              <div className="col-md-1">
                  <img src="http://templates.framework-y.com/gourmet/images/clock.gif" alt="" className="gif" />
              </div>
               <div className="col-12 col-md-2 text-center title">
                  <p>Our open schrdules</p>
                  <h1>Hours</h1>
               </div>

               <div className="col-12 col-md-9 text-center">
                 <table className="table table-hover">
                   <thead>
                     <tr>
                       <th>Day</th>
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
                 </table>

               </div>
          </div>
    </div>
  )
}

export default Openhours