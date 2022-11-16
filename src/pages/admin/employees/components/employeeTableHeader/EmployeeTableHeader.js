import React from 'react';
import './EmployeeTableHeader.scss';

const employeeTableHeader = ['nhân viên', 'email', 'di động', 'tuổi', '...'];

const EmployeeTableHeader = () => {
  return (
    <div className='employeeTableHeader'>
      {employeeTableHeader.map((item, idx) => {
        return (
          <span className='ethLabel' key={idx}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default EmployeeTableHeader;
