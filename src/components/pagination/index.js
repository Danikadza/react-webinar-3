import PropTypes from "prop-types";
import './style.css';
import { memo, useState, useEffect } from 'react';

function Pagination({ totalPages, onPageChange }) {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  //функция для генерации кнопок страниц 
  const pageNumbers = () => {
    let pageNumbers = [];

    if (totalPages <= 5) {
      pageNumbers = Array.from({ length: totalPages }, (v, i) => i + 1);
    } else if (currentPage <= 2) {
      pageNumbers = [1, 2, 3, '...', totalPages];
    } else if (currentPage >= totalPages - 1) {
      pageNumbers = [1, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }

    return pageNumbers.map(page => {
      if (page === '...') {
        return <button className="pagination-button" key={page} disabled>{page}</button>;
      } else {
        const buttonClass = page === currentPage ? 'pagination-button selected' : 'pagination-button';
        return <button className={buttonClass} key={page} onClick={() => handlePageClick(page)}>{page}</button>;
      }
    });
  };

  return (
    <div className="pagination">
      {pageNumbers()}
    </div>
  );
};

Pagination.propTypes = {

};

export default memo(Pagination);