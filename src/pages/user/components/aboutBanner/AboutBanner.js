import React from 'react';
import './AboutBanner.scss';
import blobIcon from 'src/assets/icons/ic_blob.svg';
import saleTagIcon from 'src/assets/icons/ic_like.svg';
import cleaningService from 'src/assets/images/cleaningImg_2.jpg';
import cleaningServiceTop from 'src/assets/images/cleaningImg_1.jpg';

const AboutBanner = () => {
  return (
    <div className='aboutBanner'>
      <div className='aboutBannerImg'>
        <img className='aboutBannerImage' src={cleaningServiceTop} alt='aboutBannerImg' />
        <img className='aboutBannerBlob' src={blobIcon} alt='blobIcon' />
      </div>
      <div className='aboutBannerContent'>
        <div className='aboutBannerTitle'>
          House cleaning services <br /> <span>at your convenience</span>
        </div>
        <p className='aboutBannerDesc'>
          We will work with your schedule to have your location cleaned at your convenience. We are available 7-days a
          week to meet your specific needs.
        </p>
        <div className='aboutBannerReview'>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Expert cleaning technicians</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Affordable pricing</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Guaranteed results</div>
          </div>
        </div>
      </div>

      {/* About bottom */}
      <div className='aboutBottomContent'>
        <div className='aboutBannerTitle'>
          Eco-friendly products <br /> <span>safe for your family</span>
        </div>
        <p className='aboutBannerDesc'>
          We will sanitize your home to help keep you and your family safe. We are equipped with our masks, gloves, and
          essential home sanitizing supplies.
        </p>
        <div className='aboutBannerReview'>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>We onlu use environmentally safe products</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Masks and gloves are worn for safety</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>We disinfect to kill harmful bacteria</div>
          </div>
        </div>
      </div>
      <div className='aboutBottomBoxImg'>
        <img className='aboutBottomImg' src={cleaningService} alt='aboutBottomImg' />
        {/* <img className='aboutBottomImg' src={aboutBannerImg} alt='aboutBottomImg' /> */}
        <img className='aboutBannerBlob' src={blobIcon} alt='blobIcon' />
      </div>
    </div>
  );
};

export default AboutBanner;
