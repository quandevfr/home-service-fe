import React from 'react';

import './StatCard.scss';

const StatCard = ({ item }) => {
  return (
    <div id='statCard'>
      <div className='scStatValue'>
        <div className='scValue'>{item.value}</div>
        <div className='scLabel'>{item.title}</div>
      </div>

      <div className='scIconWrap'>{<item.icon className='scIcon' />}</div>
    </div>
  );
};

export default StatCard;
