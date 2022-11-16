import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import loginBanner from '../../assets/images/loginBanner.jpg';
// import loginBanner from '../../assets/images/background-login-1.png';

import './AuthLayout.scss';

const AuthLayout = () => {
  console.log(`[AuthLayout] render`);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id='login' className='loginContainer'>
      <div className='loginBanner'>
        <img src={loginBanner} alt='loginBanner' />
      </div>
      <div className='loginBox'>
        <div className={`loginContent`}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
