import React from 'react';

import { BiGitPullRequest } from 'react-icons/bi';
import TableHeaderActions from 'src/components/tableHeaderActions';

import BeadCrumbs from '../components/beadCrumbs';
import Pagination from '../components/pagination';
import StatCard from '../components/statCard';
import RequestTableHeader from './components/requestTableHeader';
import RequestTableItem from './components/requestTableItem';
import './Requests.scss';

const beadCrumbs = ['requests'];

const statData = [
  {
    value: 66,
    title: 'Tổng số yêu cầu',
    icon: BiGitPullRequest,
  },
  {
    value: 60,
    title: 'Yêu cầu đã hoàn thành',
    icon: BiGitPullRequest,
  },
  {
    value: 6,
    title: 'Yêu cầu chưa hoàn thành',
    icon: BiGitPullRequest,
  },
  {
    value: 2,
    title: 'Yêu cầu đã hủy',
    icon: BiGitPullRequest,
  },
];

const filterOptions = {
  filterValue: 'Chọn trạng thái',
  options: ['đã hoàn thành', 'chưa hoàn thành'],
};

const Requests = () => {
  return (
    <div className='requests'>
      <BeadCrumbs title='Employees' beadCrumbs={beadCrumbs} />

      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {statData.map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
        </div>

        <div className='clTable'>
          <TableHeaderActions filterOptions={filterOptions} />

          <RequestTableHeader />

          <div className='clTableListItem'>
            {Array(10)
              .fill(0)
              .map((item, index) => {
                return <RequestTableItem item={item} key={index} />;
              })}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Requests;
