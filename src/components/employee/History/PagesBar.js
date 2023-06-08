import React, { useState } from "react";
import './PagesBar.css';

function PagesBar({ currentPage, totalPages, onPageChange }) {
  const [pageButtons, setPageButtons] = useState([]);

  // Update the list of page buttons based on the current page and total pages
  React.useEffect(() => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} className={i === currentPage ? 'active' : ''} onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }
    setPageButtons(buttons);
  }, [currentPage, totalPages, onPageChange]);

  return (
    <div className="pages-bar">
      {pageButtons}
    </div>
  );
}

export default PagesBar;
