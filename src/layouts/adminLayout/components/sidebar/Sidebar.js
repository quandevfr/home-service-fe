import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, selectAuthUserProfile } from 'src/features/auth/authSlice';

import { menu } from 'src/utils/enum';

import { BiLogOut } from 'react-icons/bi';

import './Sidebar.scss';

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectAuthUserProfile);

  const handleLogOut = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className='sbContainer'>
      <div className='sbLogo'>
        <h2 className='sbLogoName'>Home Services</h2>
        <p className='sbLogoDesc'>Best care</p>
      </div>
      <div className='sbMenu'>
        <ul className='sbMenuList'>
          {menu.map((item, index) => {
            return (
              <NavLink to={item.path} className='sbMenuItemLink' key={index}>
                <li className='sbMenuItem'>
                  {<item.icon className='sbMenuIcon' />}
                  <span className='sbMenuLinkItem'>{item.title}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className='sbProfileContainer'>
        <div className='sbProfile'>
          <div className='sbProfileWrap'>
            <div className='sbProfileAvatar'>
              <div className='sbProfileStatus'></div>
              <img
                src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80'
                alt='avatar'
                className='sbProfileImg'
              />
            </div>
            <div className='sbProfileContent'>
              <p className='sbProfileName'>
                {`${currentUser.infoUser?.firstName} ${currentUser.infoUser?.lastName}` || currentUser?.role}
              </p>
              <p className='sbProfileRole'>{currentUser.role?.toLowerCase()}</p>
            </div>
          </div>
          <div className='sbLogout' onClick={handleLogOut}>
            <BiLogOut className='sbLogoutIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
