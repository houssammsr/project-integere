import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="paginationvfvf">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Previous
      </button>
      <div className="numbers">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
