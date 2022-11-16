import React from 'react';
import { useState } from 'react';

import { FaUsers } from 'react-icons/fa';
import Overlay from 'src/components/overlay';
import TableHeaderActions from 'src/components/tableHeaderActions';

import BeadCrumbs from '../components/beadCrumbs';
import Pagination from '../components/pagination';
import StatCard from '../components/statCard';
import EmployeeSideBar from './components/employeeSideBar';
import EmployeeTableHeader from './components/employeeTableHeader';
import EmployeeTableItem from './components/employeeTableItem';

import './Employees.scss';

const beadCrumbs = ['employees'];

// StatCard data
const statData = [
  {
    value: 50,
    title: 'Tổng số nhân viên',
    icon: FaUsers,
  },
];

const filterOptions = {
  filterValue: 'Chọn giới tính',
  options: ['nam', 'nữ'],
};

const Employees = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div id='employees' className='employees'>
      <BeadCrumbs title='Employees' beadCrumbs={beadCrumbs} />

      <EmployeeSideBar sidebar={sidebar} setSideBar={setSideBar} />
      {sidebar && <Overlay />}

      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {statData.map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
        </div>

        <div className='clTable'>
          <TableHeaderActions add='thêm nhân viên mới' filterOptions={filterOptions} setSideBar={setSideBar} />

          <EmployeeTableHeader />

          <div className='clTableListItem'>
            {Array(10)
              .fill(0)
              .map((item, index) => {
                return <EmployeeTableItem item={item} key={index} />;
              })}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Employees;
