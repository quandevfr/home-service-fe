import React from 'react';

import { FaUsers } from 'react-icons/fa';

import './Customers.scss';

import StatCard from '../components/statCard';
import TableHeaderActions from 'src/components/tableHeaderActions';
import CustomerTableItem from './components/customerTableItem';
import CustomerTableHeader from './components/customerTableHeader';
import Pagination from '../components/pagination';
import BeadCrumbs from '../components/beadCrumbs';

// StatCard data
const statData = [
  {
    value: 123,
    title: 'Tổng số khách hàng',
    icon: FaUsers,
  },
  {
    value: 45,
    title: 'Khách hàng sử dụng',
    icon: FaUsers,
  },
  {
    value: 78,
    title: 'Khách hàng chưa sử dụng',
    icon: FaUsers,
  },
];

const beadCrumbs = ['customers'];

const Customers = () => {
  return (
    <div id='customers' className='customers'>
      <BeadCrumbs title='Customers' beadCrumbs={beadCrumbs} />

      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {statData.map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
        </div>

        <div className='clTable'>
          <TableHeaderActions />

          <CustomerTableHeader />

          <div className='clTableListItem'>
            {Array(10)
              .fill(0)
              .map((item, index) => {
                return <CustomerTableItem item={item} key={index} />;
              })}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Customers;
