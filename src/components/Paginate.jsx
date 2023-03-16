import React from 'react'
import './Paginate.css'

const Paginate = ({
    postsPerPage, totalPosts,
currentPage, paginate, previousPage, nextPage}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
  }

  

  return (
     <div className='pagination-container'>
      <div className="section-divider"></div>
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
            <i className="fa-solid fa-circle-chevron-left"></i>
        </li>
        {pageNumbers.map((number) => (
  
          <li key={number}
          onClick = {() => paginate(number)}
          className={
            'page-number' + (number === currentPage ? 'active' : '')
          }>
             {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          <i className="fa-solid fa-circle-chevron-right"></i>
        </li>
      </ul>
     </div>
  )
}

export default Paginate