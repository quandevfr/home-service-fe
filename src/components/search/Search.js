import React from 'react';

import searchIcon from 'src/assets/icons/ic_search.svg';
import './Search.scss';

const Search = () => {
  return (
    <div id='searchComponent'>
      <button className='scBtnSearch'>
        <img src={searchIcon} alt='searchIcon' className='scSearchIcon' />
      </button>
      <input type='text' placeholder='Tìm kiếm...' className='scInputSearch' />
    </div>
  );
};

export default Search;
