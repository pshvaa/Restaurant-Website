import React from 'react'
import './Post.css'

import '../gallery.json'

const Post = ({postImage, icon}) => {
  return (
    <div className="social-post col-12 col-md-6 col-lg-4">
        <img src={postImage} alt="Gourmet restaurant"  />
        <span>{icon}</span>
    </div>
  )
}

export default Post