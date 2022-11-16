import React from 'react';
import helpFunction from 'src/utils/help';
import './Home.scss';

import bannerImg from 'src/assets/images/banner.svg';
import About from '../components/about';
import AboutBanner from '../components/aboutBanner';

const Home = () => {
  helpFunction.useScrollToTop();

  return (
    <div className='homePage'>
      <div className='homePageContainer'>
        <div className='banner'>
          <div className='bannerContent'>
            <div className='bannerTitle'>
              We will customize a <br /> cleaning service <span>just for you</span>
            </div>
            <p className='bannerDesc'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className='bannerBtn btn'>xem thêm...</div>
          </div>
          <div className='bannerImg'>
            <img src={bannerImg} alt='bannerImg' />
          </div>
        </div>
        <section className='aboutContainer'>
          <About />
        </section>

        <section className='homeAboutBanner'>
          <AboutBanner />
        </section>
      </div>
    </div>
  );
};

export default Home;
