import React from 'react';

export const Pagination = ( {totalCharacters,
charactersPerPage,
setCurrentPage,
currentPage} ) => {
  let pages = [];

  for(let i=1; i<= Math.ceil(totalCharacters/charactersPerPage); i++){
    pages.push(i);
  }

  return (
    <div className='pagination'>
      <button
      onClick={()=>setCurrentPage(currentPage - 1)}
      style={{fontSize: "x-small"}}>Prev</button>
      {
        pages.map((page, index)=>{
          return <button
          key={index}
          onClick={()=> setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
          >{page}</button>
        })
      }
      <button
      onClick={()=>setCurrentPage(currentPage + 1)}
      style={{fontSize: "x-small"}}>Next</button>
    </div>
  )
}