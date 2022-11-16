import React from 'react';

import Filter from 'src/pages/admin/components/filter';
import Search from '../search';

import './TableHeaderActions.scss';

const TableHeaderActions = ({ add, filterOptions, setSideBar }) => {
  const handleAdd = () => {
    setSideBar(true);
  };
  return (
    <div className='tableHeaderActions'>
      <div className='thaLeft'>
        <div className='thaFilter'>{filterOptions && <Filter filterOptions={filterOptions} />}</div>
      </div>
      <div className='thaRight'>
        <Search />
        {add && (
          <div className='thaAdd' onClick={handleAdd}>
            {add}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeaderActions;
