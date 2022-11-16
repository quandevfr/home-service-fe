import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'src/pages/user/components/footer';
import Header from 'src/pages/user/components/header';
import ChatBoxUser from 'src/components/chatBoxUser';
import './CustomerLayout.scss';

import { FaChevronUp, FaRegComments, FaShoppingCart } from 'react-icons/fa';

const CustomerLayout = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const scrollToTopVisible = () => {
    if (window.scrollY >= 100) {
      setScrollTop(true);
    } else if (window.scrollY < 100) {
      setScrollTop(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', scrollToTopVisible);

  return (
    <div className='customerLayout'>
      <Header />
      <div className='customerMain'>
        <Outlet />
        <div className={scrollTop ? 'cart' : 'cartDefault'}>
          <span className='cartNum'>3</span>
          <FaShoppingCart className='cartIcon' />
        </div>

        <div className={scrollTop ? 'chatWithAdmin' : 'chatWithAdminDefault'}>
          <span className='chatWithAdminNum'>9+</span>
          <FaRegComments className='chatWithAdminIcon' />
        </div>

        <ChatBoxUser />

        {scrollTop && (
          <div className='scrollToTop' onClick={handleScrollToTop}>
            <FaChevronUp className='scrollToTopIcon' />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
