import React, {useState} from 'react'

// import { MdOutlinePhotoCamera } from "react-icons/md";
// import { RxVideo }   from "react-icons/rx";

import Post from './Post'
// import FilteredPosts from './FilteredPosts'

import './Posts.css'

import galleryData from '../gallery.json'
import MyBtn from './MyBtn'


// {postImage, icon}
const Posts = () => {

  const artimSayi = 3;
  const [next, setNext] = useState(artimSayi);
  const dahaCoxSekil = () => {
        setNext(next + artimSayi);
      };

  const FoodList = () => {
    return galleryData.filter(filteredList =>{
        return filteredList.theme === 'food'
    })
    .map(filteredList => {
        return <Post postImage = {filteredList.postImage} postIcon = {filteredList.icon} /> 
    }) 
  }

  const EventList = () => {
    return galleryData.filter(filteredList =>{
        return filteredList.theme === 'event'
    })
    .map(filteredList => {
        return <Post postImage = {filteredList.postImage} postIcon = {filteredList.icon} />
    
    })
  }


  const LocationList = () => {
    return galleryData.filter(filteredList =>{
        return filteredList.theme === 'location'
    })
    .map(filteredList => {
        return <Post postImage = {filteredList.postImage} postIcon = {filteredList.icon} />
    })
  }
  
  return (
    <div id="menu-post">
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text">
                    <h1>Explore Our Menu</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint temporibus natus optio
                        eveniet nobis accusantium?</p>
                </div>
            </div>
        </div>

        <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-food-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="true">Food</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events" type="button" role="tab" aria-controls="pills-events" aria-selected="false">Events</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-location-tab" data-bs-toggle="pill" data-bs-target="#pills-location" type="button" role="tab" aria-controls="pills-location" aria-selected="false">Location</button>
                </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane row fade show active" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">
         {FoodList().slice(0, next)}
          </div>
          <div className="tab-pane row fade" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
          {EventList().slice(0, next)}
          </div>
          <div className="tab-pane row fade" id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
          {LocationList().slice(0, next)}
          </div>
        </div>

        {next < ((galleryData.filter(filteredList =>{
        return filteredList.theme === 'location'
    }).length) || ((galleryData.filter(filteredList =>{
        return filteredList.theme === 'food'
    }).length)) || ((galleryData.filter(filteredList =>{
        return filteredList.theme === 'event'
    }).length)))   && (
          <MyBtn className="mt-4"
          text = "Load More" onClick={dahaCoxSekil} />
        // <button className="button-1 mt-4" onClick={dahaCoxSekil}>Load More</button>

        )}
        </div>

        <div className="section-divider"></div>
    </div>
  )
}

export default Posts