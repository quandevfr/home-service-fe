import React from 'react';

import { FaEllipsisV } from 'react-icons/fa';

import './RequestTableItem.scss';

const RequestTableItem = () => {
  return (
    <div className='requestTableItem'>
      <span className='ctiLabel'>19062022</span>
      <span className='ctiLabel'>Phạm Ngọc Quân</span>
      <span className='ctiLabel'>987-654-321</span>
      <div className='ctiLabel'>
        <span className='ctiLabelStatusRequest'>đã hoàn thành</span>
      </div>
      <span className='ctiLabel'>...</span>
      <div className='ctiActions'>
        <FaEllipsisV className='ctiActionIcon' />
      </div>
    </div>
  );
};

export default RequestTableItem;
