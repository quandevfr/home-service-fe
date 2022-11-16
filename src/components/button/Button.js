import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { title } = props;

  return (
    <button id='buttonComponent' className='bcPrimary'>
      {title}
    </button>
  );
};

export default Button;
