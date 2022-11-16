import React from 'react';
import starIcon from 'src/assets/icons/ic_star.svg';
import CardAbout from '../cardAbout';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTitle'>
        <span>home</span> <img src={starIcon} alt='star' className='starIcon' /> <span>office</span>
        <img src={starIcon} alt='star' className='starIcon' /> <span>apartment</span>
      </div>
      <p className='aboutDesc'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make.
      </p>

      <div className='aboutContent'>
        {Array(4)
          .fill(0)
          .map((item, idx) => {
            return <CardAbout key={idx} />;
          })}
      </div>
    </div>
  );
};

export default About;
