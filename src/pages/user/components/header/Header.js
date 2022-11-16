import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { exactRouter } from 'src/routes/routes';

import { menuUser } from 'src/utils/enum';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(exactRouter.signIn);
  };

  return (
    <div className='header'>
      <nav className='nav'>
        <div className='logo'>
          <Link to={'/'}>
            <span className='logoContent'>Home Services</span>
          </Link>
        </div>

        <ul className='menuList'>
          {menuUser.map((item, idx) => {
            return (
              <li className='menuItem' key={idx}>
                <NavLink className='menuLink' to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className='navActions'>
          <div className='navSignIn btn' onClick={handleLoginClick}>
            đăng nhập
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
