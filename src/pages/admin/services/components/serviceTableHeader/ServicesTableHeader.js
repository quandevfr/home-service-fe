import React from 'react';
import './ServicesTableHeader.scss';

const serviceTableHeader = ['dịch vụ', 'giá (vnđ)', 'trạng thái', '...'];

const ServicesTableHeader = () => {
  return (
    <div className='serviceTableHeader'>
      {serviceTableHeader.map((item, idx) => {
        return (
          <span className='sthLabel' key={idx}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default ServicesTableHeader;
