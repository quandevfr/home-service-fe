import React from 'react';
// import roomIcon from 'src/assets/icons/ic_room.svg';
import blobIcon from 'src/assets/icons/ic_blob.svg';
import './CardAbout.scss';

const CardAbout = () => {
  return (
    <div className='cardAbout'>
      <div className='cardAboutImg'>
        <img className='blobIcon' src={blobIcon} alt='icBlob' />
        {/* <img className='homeCleaningIcon' src={roomIcon} alt='homeCleaning' /> */}
      </div>
      <div className='cardAboutContent'>
        <div className='cardAboutTitle'>House cleaning</div>
        <div className='cardAboutDesc'>
          Lorem ipsum dolor sit amet, consetetur sadipscingslitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam.
        </div>
        <div className='aboutBtn'>xem thêm...</div>
      </div>
    </div>
  );
};

export default CardAbout;
