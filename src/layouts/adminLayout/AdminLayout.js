import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './AdminLayout.scss';

import Sidebar from './components/sidebar';

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('services');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='adContainer'>
      <Sidebar />
      <div className='adMain'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
