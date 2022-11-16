import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { menuUser } from 'src/utils/enum';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerLogo'>
        <Link to='/' className='footerLogoLink'>
          <span>Home Services</span>
        </Link>
      </div>
      <div className='footerMenu'>
        <ul className='footerList'>
          {menuUser.map((item, idx) => {
            return (
              <li className='footerItem' key={idx}>
                <NavLink to={item.path} className='footerLink'>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <div className='footerHotline btn'>(987) 654 - 321</div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
