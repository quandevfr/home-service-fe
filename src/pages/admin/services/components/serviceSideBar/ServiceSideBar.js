import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FaTimes } from 'react-icons/fa';

import './ServiceSideBar.scss';

const schema = yup.object().shape({
  service: yup.string().required('Vui lòng nhập service'),
  price: yup.string().required('Vui lòng nhập price'),
});

const ServiceSideBar = ({ sidebar, setSideBar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(`[ServiceSideBar] onSubmit: data -> ${JSON.stringify(data, null, 2)}`);
    return;
  };

  const handleResetForm = () => {
    reset({ service: '', price: '' });
  };

  const handleCloseForm = () => {
    setSideBar(false);
  };

  return (
    <div className={`${'serviceSideBar'} ${sidebar ? 'showSideBar' : ''}`}>
      <div className='ssbHeader'>
        <div className='ssbTitle'>new service</div>
        <div className='ssbClose' onClick={handleCloseForm}>
          <FaTimes className='ssbCloseIcon' />
        </div>
      </div>
      <form className='ssbContent' onSubmit={handleSubmit(onSubmit)}>
        <div className='sbInputField'>
          <label htmlFor='service' className='sbLabel'>
            Service <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='service' name='service' {...register('service')} />
          {errors.service && <p className='sbValidate'>{errors.service?.message}</p>}
        </div>
        <div className='sbInputField'>
          <label htmlFor='price' className='sbLabel'>
            Price <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='price' name='price' {...register('price')} />
          {errors.price && <p className='sbValidate'>{errors.price?.message}</p>}
        </div>
        <div className='sbBtn'>
          <input type='submit' value='Xác nhận' className='sbBtnSubmit sbInputBtn' />
          <button className='sbBtnReset sbInputBtn' onClick={handleResetForm}>
            Làm mới
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceSideBar;
