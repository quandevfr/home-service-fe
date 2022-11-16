import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';

import { FaLayerGroup } from 'react-icons/fa';
// import servicesApi from 'src/apis/admin/servicesApi';
import Overlay from 'src/components/overlay';
import TableHeaderActions from 'src/components/tableHeaderActions';
import { serviceList } from 'src/data/ServicesData';

import BeadCrumbs from '../components/beadCrumbs';
import Pagination from '../components/pagination';
import StatCard from '../components/statCard';
import ServiceSideBar from './components/serviceSideBar';
import ServiceTableHeader from './components/serviceTableHeader';
import ServiceTableItem from './components/serviceTableItem';

import './Services.scss';

const beadCrumbs = ['services'];

// StatCard data
const statData = [
  {
    value: 123,
    title: 'Tổng số dịch vụ',
    icon: FaLayerGroup,
  },
  {
    value: 45,
    title: 'Dịch vụ đã kích hoạt',
    icon: FaLayerGroup,
  },
  {
    value: 78,
    title: 'Dịch vụ chưa kích hoạt',
    icon: FaLayerGroup,
  },
];

const filterOptions = {
  filterValue: 'Chọn giá',
  options: ['tăng dần', 'giảm dần'],
};

const Services = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div id='services' className='services'>
      <BeadCrumbs title='Services' beadCrumbs={beadCrumbs} />

      <ServiceSideBar sidebar={sidebar} setSideBar={setSideBar} />
      {sidebar && <Overlay />}

      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {statData.map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
        </div>

        <div className='clTable'>
          <TableHeaderActions add='thêm dịch vụ mới' filterOptions={filterOptions} setSideBar={setSideBar} />

          <ServiceTableHeader />

          <div className='clTableListItem'>
            {serviceList.map((item, index) => {
              return <ServiceTableItem item={item} key={item.id} />;
            })}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Services;
