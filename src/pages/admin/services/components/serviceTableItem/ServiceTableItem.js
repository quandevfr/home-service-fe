import React from 'react';
import { useState } from 'react';

import { FaEllipsisV, FaEye, FaPen, FaTrash } from 'react-icons/fa';

import './ServiceTableItem.scss';

const actions = [
  {
    action: 'chi tiết',
    icon: FaEye,
  },
  {
    action: 'sửa',
    icon: FaPen,
  },
  {
    action: 'xóa',
    icon: FaTrash,
  },
];

const ServiceTableItem = ({ item }) => {
  const [showActions, setShowActions] = useState(null);

  const toggle = (id) => {
    if (showActions === id) {
      return setShowActions(null);
    }

    setShowActions(id);
  };

  return (
    <div className='serviceTableItem'>
      <div className='ctiName'>
        <div className='ctiAvatar'>
          <img
            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
            alt=''
            className='ctiAvatarImg'
          />
        </div>
        <span className='ctiLabel ctiLabelName'>{`Dọn dẹp phòng ngủ`}</span>
      </div>
      <span className='ctiLabel'>500.000</span>
      <div className='ctiStatus'>
        <span className='ctiStatusActive'>{`chưa kích hoạt`}</span>
      </div>
      <div className='ctiActions' onClick={() => toggle(item.id)}>
        <FaEllipsisV className='ctiActionIcon' />
        {showActions === item.id ? (
          <ul className='ctiActionList'>
            {actions.map((action, idx) => {
              return (
                <li className='ctiActionItem' key={idx}>
                  {<action.icon className='citActionIconEye' />}
                  <span>{action.action}</span>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceTableItem;
