import React from 'react'
import Post from './Post'

import galleryData from '../gallery.json'

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

const FilteredPosts = () => {
  return (
    <div className="filtered-posts">
          
    </div>
  )
}

export default FilteredPosts