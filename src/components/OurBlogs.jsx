import React, {useState, useEffect} from 'react'
import PageParallax from './PageParallax/PageParallax'
import BlogCard from './BlogCard'
import './OurBlog.css'

import blogData from '../blogs.json'
import './Paginate'
import Paginate from './Paginate'

const OurBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setBlogPosts(blogData)
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  const previousPage = () => {
    if (currentPage !== 1){
      setCurrentPage(currentPage-1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }
  return (
    <>
      <div className="blogs-section">
        <PageParallax background="http://templates.framework-y.com/gourmet/images/bg-7.jpg" title= "Bloqlar" subtitle="Bloqumuzdan və sosial mediadan ən son xəbərlər" />
        <div className="bc-video-bottom"></div>
              {/* <div className="parallax-section">
      <div className="parallax-menu-intro">
          <div className="bg-parallax-menu"></div>
          <div className="parallax-title">
             <h1 className="heading">Stay Updated</h1>
             <p className="text text-center">Latest News & Events</p>
          </div>
       </div>
              </div> */}
              {/* date, blogImage, title, topic, writer, content */}
          <div className="blogs-bottom row">
            {blogPosts ? (
              <div className="blog-cards col-12 col-md-9 col-lg-10 row">
                {
                   currentPosts.map(p => (
                    <BlogCard date = {p.date} blogImage = {p.blogImage} title = {p.title} topic = {p.topic}  writer = {p.writer} content = {p.content} />
                ))}

                <Paginate  
                postsPerPage={postsPerPage}
                totalPosts={blogPosts.length}
                paginate = {paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                />
              </div>) : (<div className="loading">Loading...</div>)
            }
            
            {/* <div className="col-12 col-md-3 col-lg-2 tagbox p-5">
              <p className="title-2">Tags</p>
              <div className="tags row">
                <a href='#' className='col-md-12 col-md-6'>Modern</a>
                <a href='#' className='col-md-12 col-md-6'>Fresh</a>
                <a href='#' className='col-md-12 col-md-6'>Luxury</a>
                <a href='#' className=' col-md-12 col-md-6'>Food</a>
                <a href='#' className=' col-md-12 col-md-6'>Awesome</a>
                <a href='#' className=' col-md-12 col-md-6'>Hello</a>
                <a href='#' className='col-md-12 col-md-6'>Gourmet</a>
                <a href='#' className='col-md-12 col-md-6'>Zövq</a>
                <a href='#' className='col-md-12 col-md-6'>Zərifliyin təsviri</a>
              </div>
            </div> */}

            

   	
          </div>

           
           <h3 className="section-subtitle text-center p-2">Partnyorlarımız</h3>
          <div className="sponsor-slider">
	           <div class="slide-track">
		             <div className="slide">
			<img src="https://alethemes.com/delizioso/wp-content/uploads/sites/108/2022/12/l1.png" height="100" width="250" alt="" />
		             </div>

		            <div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		            </div>

		            <div className="slide">
			<img src="https://alethemes.com/delizioso/wp-content/uploads/sites/108/2022/12/l2.png" height="100" width="250" alt="" />
		            </div>

		            <div className="slide">
			<img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" height="100" width="250" alt="" />
		            </div>

		            <div className="slide">
			<img src="https://alethemes.com/delizioso/wp-content/uploads/sites/108/2022/12/l3.png" height="100" width="250" alt="" />
		            </div>

		            <div className="slide">
			<img src="https://elements-cover-images-0.imgix.net/65db9b50-ecda-464e-aa91-a8196a4352be?auto=compress%2Cformat&fit=max&w=900&s=c1b54c18723a51bc1b2fc5823cca4d45" height="100" width="250" alt="" />
		            </div>

		            <div className="slide">
			<img src="https://alethemes.com/delizioso/wp-content/uploads/sites/108/2022/12/l1.png" height="100" width="250" alt="" />
		            </div>


		            <div className="slide">
			<img src="https://www.creativefabrica.com/wp-content/uploads/2020/09/25/Clean-and-simple-restaurant-logo-design-Graphics-5686792-1-580x386.jpg" height="100" width="250" alt="" />
		            </div>

		           <div className="slide">
			<img src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||130||contestfile_6&flp=1553588656-15814937765c99e1b03f0621-53822858.jpg" height="100" width="250" alt="" />
		           </div>

		          <div className="slide">
			<img src="https://static.vecteezy.com/system/resources/thumbnails/010/065/922/small_2x/vintage-food-restaurant-logo-design-free-vector.jpg" height="100" width="250" alt="" />
		          </div>

		          <div className="slide">
			<img src="https://dynamic.brandcrowd.com/asset/logo/6cc0fdef-3fe7-4d1d-900d-e7f884b7bb8d/logo-search-grid-1x?logoTemplateVersion=1&v=637936305229930000" height="100" width="250" alt="" />
		          </div>

		          <div className="slide">
			<img src="https://restaurant.eatapp.co/hubfs/Modern-Restaurant-Logo.jpg" height="100" width="250" alt="" />
		          </div>

		          <div className="slide">
			<img src="https://media.istockphoto.com/id/1331454163/vector/sombrero-mexican-man-vector-stock-illustration-mexico-america-latin-sombrero-carnival.jpg?s=612x612&w=0&k=20&c=QoQHmHbrH-fu54z_GhnXyqXkKkpsOFVClKkBfXcs_QI=" height="100" width="250" alt="" />
		          </div>

              <div className="slide">
			<img src="https://cdn1.vectorstock.com/i/1000x1000/19/90/letter-j-restaurant-food-logo-design-vector-40141990.jpg" height="100" width="250" alt="" />
		          </div>
	</div>
</div>
      </div>

      <div className="section-divider"></div>
    </>
  )
}

export default OurBlogs