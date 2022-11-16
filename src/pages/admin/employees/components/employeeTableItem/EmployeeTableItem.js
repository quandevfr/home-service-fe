import React from 'react';

import { FaEllipsisV } from 'react-icons/fa';

import './EmployeeTableItem.scss';

const EmployeeTableItem = () => {
  return (
    <div className='employeeTableItem'>
      <div className='ctiName'>
        <div className='ctiAvatar'>
          <img
            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
            alt=''
            className='ctiAvatarImg'
          />
        </div>
        <span className='ctiLabel ctiLabelName'>Pham Ngoc Quan</span>
      </div>
      <span className='ctiLabel'>quandev.fr@gmail.com</span>
      <span className='ctiLabel'>985-313-666</span>
      <span className='ctiLabel'>23</span>
      <div className='ctiActions'>
        <FaEllipsisV className='ctiActionIcon' />
      </div>
    </div>
  );
};

export default EmployeeTableItem;
