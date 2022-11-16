import React from 'react';
import helpFunction from 'src/utils/help';
import './ServicesCustomer.scss';
import { listFilterServices } from 'src/utils/enum';

import { FaSlidersH, FaRegComments } from 'react-icons/fa';
import { useState } from 'react';
import { ServicesData } from 'src/data/ServicesData';
import { useRef } from 'react';
import Search from 'src/components/search';
import Pagination from 'src/pages/admin/components/pagination';

const ServicesCustomer = () => {
  helpFunction.useScrollToTop();

  const filterRef = useRef();

  const [showFilter, setShowFilter] = useState(false);
  const [filterSelected, setFilterSelected] = useState('');

  const filterClicked = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterItemSelected = (item) => {
    setFilterSelected(item);
  };

  // Handle Click out side Filter
  helpFunction.useOutside(filterRef, setShowFilter);

  return (
    <div className='servicesPage'>
      <div className='servicesPageHeader'>
        <div className='servicesPageFilter' ref={filterRef}>
          <div className='servicesPageFilterSelect' onClick={filterClicked}>
            <span className='servicesPageFilterTitle'>{`${filterSelected ? filterSelected : 'Lọc theo'}`}</span>
            <FaSlidersH className='servicesPageFilterIcon' />
          </div>
          {showFilter && (
            <ul className='servicesPageFilterList' onClick={filterClicked}>
              {listFilterServices.map((item, index) => {
                return (
                  <li className='servicesPageFilterItem' key={index} onClick={() => handleFilterItemSelected(item)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <Search />
      </div>
      <div className='servicesPageContent'>
        {ServicesData.map((service, index) => {
          return (
            <div className='servicesCard' key={service.id}>
              <div className='servicesCardImgWrap'>
                <img src={service.image} alt={service.name} className='servicesCardImg' />
              </div>
              <div className='servicesCardContentWrap'>
                <div className='servicesCardContent'>
                  <h3 className='servicesCardTitle'>{service.name}</h3>
                  <p className='servicesCardDesc'>{service.description}</p>
                </div>
                <div className='servicesCardActions'>
                  <div className='servicesCardBtn servicesCardBtnAdd'>Chọn dịch vụ</div>
                  <div className='servicesCardBtn servicesCardBtnChat'>
                    <FaRegComments className='servicesCardChatIcon' />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination />
    </div>
  );
};

export default ServicesCustomer;
