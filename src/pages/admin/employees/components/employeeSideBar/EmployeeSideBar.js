import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FaTimes, FaCamera } from 'react-icons/fa';

import './EmployeeSideBar.scss';
import { useState } from 'react';

const schema = yup.object().shape({
  picture: yup.mixed().required('Vui lòng tải ảnh lên'),
  name: yup.string().required('Vui lòng nhập tên'),
  email: yup.string().required('Vui lòng nhập email'),
  phone: yup.string().max(10, 'Số điện thoại không hợp lệ').required('Vui lòng nhập số điện thoại'),
});

const EmployeeSideBar = ({ sidebar, setSideBar }) => {
  const [picture, setPicture] = useState();

  const handlePreviewAvatar = (e) => {
    console.log(e);
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setPicture(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(`[EmployeeSideBar] onSubmit: data -> ${JSON.stringify(data, null, 2)}`);
    return;
  };

  const handleResetForm = () => {
    reset();
    setPicture();
  };

  const handleCloseForm = () => {
    setSideBar(false);
    handleResetForm();
  };

  return (
    <div className={`${'employeeSideBar'} ${sidebar ? 'showSideBar' : ''}`}>
      <div className='ssbHeader'>
        <div className='ssbTitle'>new employee</div>
        <div className='ssbClose' onClick={handleCloseForm}>
          <FaTimes className='ssbCloseIcon' />
        </div>
      </div>
      <form className='ssbContent' onSubmit={handleSubmit(onSubmit)}>
        <div className='sbInputField'>
          <div className='sbUpload'>
            {picture ? (
              <>
                <img
                  src='https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
                  alt='avatar'
                  className='sbAvatarBackground'
                />
                <div className='overlayImage'></div>
                <img src={picture.preview} alt='avatar' className='sbAvatar' />
              </>
            ) : (
              <>
                <input
                  type='file'
                  id='picture'
                  name='picture'
                  alt='picture'
                  {...register('picture')}
                  onChange={handlePreviewAvatar}
                  hidden
                />
                <div className='sbUploadImageWrap'>
                  <label htmlFor='picture' className='sbUploadImage'>
                    <FaCamera className='sbUploadImageIcon' />
                    <span className='sbUploadImageTitle'>Tải lên ảnh của bạn ở đây</span>
                    <span className='sbUploadImageSupports'>Hỗ trợ: JPG, PNG, TIFF</span>
                  </label>
                </div>
              </>
            )}
          </div>
          {errors.picture && <p className='sbValidate'>{errors.picture?.message}</p>}
        </div>
        <div className='sbInputField'>
          <label htmlFor='name' className='sbLabel'>
            Name <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='service' name='name' {...register('name')} />
          {errors.name && <p className='sbValidate'>{errors.name?.message}</p>}
        </div>
        <div className='sbInputField'>
          <label htmlFor='email' className='sbLabel'>
            Email <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='email' name='email' {...register('email')} />
          {errors.email && <p className='sbValidate'>{errors.email?.message}</p>}
        </div>
        <div className='sbInputField'>
          <label htmlFor='phone' className='sbLabel'>
            Di động <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='phone' name='phone' {...register('phone')} />
          {errors.phone && <p className='sbValidate'>{errors.phone?.message}</p>}
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

export default EmployeeSideBar;
