import React from 'react';
import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import './Pagination.scss';

const Pagination = () => {
  const [currentNum, setCurrentNum] = useState(1);
  const arrPagination = [];

  for (let i = 1; i <= 5; i++) {
    arrPagination.push(i);
  }

  const handleNumClick = (num) => {
    setCurrentNum(num);
  };

  const handlePrevClick = () => {
    if (currentNum > 1) {
      setCurrentNum(currentNum - 1);
    }
  };

  const handleNextClick = () => {
    if (currentNum < arrPagination.length) {
      setCurrentNum(currentNum + 1);
    }
  };

  return (
    <div id='pagination' className='pagination'>
      <div className='paginationContainer'>
        <div className='paginationPrev' onClick={handlePrevClick}>
          <FaChevronLeft className='paginationIcon' />
        </div>
        {arrPagination.map((item, idx) => {
          return (
            <span
              className={`paginationNum ${currentNum === item && 'paginationActive'}`}
              key={idx}
              onClick={() => handleNumClick(item)}
            >
              {item}
            </span>
          );
        })}
        <div className='paginationNext' onClick={handleNextClick}>
          <FaChevronRight className='paginationIcon' />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
