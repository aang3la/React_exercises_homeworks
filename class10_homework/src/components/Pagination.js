import React from "react";

export const Pagination = ({ setCurrentPage, currentPage, apiData }) => {
  let pages = [];

  // ? - the optional chaining operator; used to safely access nested properties
  for (let i = 1; i <= apiData?.info?.pages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(currentPage - 1)}
      style={{ fontSize: "x-small" }}>Prev</button>

      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}>{page}</button>
        );
      })}

      <button onClick={() => setCurrentPage(currentPage + 1)}
      style={{ fontSize: "x-small" }}>Next</button>
    </div>
  );
};


//* className={page === currentPage ? "active" : ""}
// If page is equal to currentPage, it sets the CSS class to "active."
// If page is not equal to currentPage, it sets the CSS class to an empty string (no class applied)