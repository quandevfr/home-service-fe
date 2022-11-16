import React from 'react';
import './RequestTableHeader.scss';

const requestTableHeader = ['id', 'khách hàng', 'di động', 'trạng thái', 'nhân viên', '...'];

const RequestTableHeader = () => {
  return (
    <div className='requestTableHeader'>
      {requestTableHeader.map((item, idx) => {
        return (
          <span className='rthLabel' key={idx}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default RequestTableHeader;
