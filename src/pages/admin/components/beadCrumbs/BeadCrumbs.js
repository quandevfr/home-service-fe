import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './BeadCrumbs.scss';

const BeadCrumbs = ({ title, beadCrumbs }) => {
  return (
    <div className='beadCrumbsHeader'>
      <h3 className='beadCrumbsTitle'>{title}</h3>
      <div className='beadCrumbsContent'>
        <span className='beadCrumbsAdmin'>Admin</span>
        {beadCrumbs.map((item, idx) => {
          return (
            <div className='beadCrumbsContentItem' key={idx}>
              <FaChevronRight className='beadCrumbsIcon' />
              <span className='beadCrumbsName'>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BeadCrumbs;
