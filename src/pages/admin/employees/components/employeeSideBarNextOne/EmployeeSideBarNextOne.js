import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FaTimes } from 'react-icons/fa';

import './EmployeeSideBarNextOne.scss';

const schema = yup.object().shape({
  service: yup.string().required('Vui lòng nhập service'),
  price: yup.string().required('Vui lòng nhập price'),
});

const EmployeeSideBarNextOne = ({ sidebarNext, setSideBarNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(`EmployeeSideBarNextOne onSubmit -> ${JSON.stringify(data, null, 2)}`);
    return;
  };

  const handleResetForm = () => {
    reset();
  };

  const handleCloseForm = () => {
    setSideBarNext(false);
    reset();
  };

  return (
    <div className={`${'employeeSideBarNextOne'} ${sidebarNext ? 'showSideBar' : ''}`}>
      <div className='ssbHeader'>
        <div className='ssbTitle'>new employee</div>
        <div className='ssbClose' onClick={handleCloseForm}>
          <FaTimes className='ssbCloseIcon' />
        </div>
      </div>

      <form className='ssbContent' onSubmit={handleSubmit(onSubmit)}>
        {/* Age */}
        <div className='sbInputField'>
          <label htmlFor='age' className='sbLabel'>
            Năm sinh <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='age' name='age' {...register('age')} />
          {errors.age && <p className='sbValidate'>{errors.age?.message}</p>}
        </div>
        {/* Address */}
        <div className='sbInputField'>
          <label htmlFor='address' className='sbLabel'>
            Địa chỉ <span>*</span>
          </label>
          <input className={`sbInput`} type='text' id='address' name='address' {...register('address')} />
          {errors.address && <p className='sbValidate'>{errors.address?.message}</p>}
        </div>
        {/* citizen identification */}
        <div className='sbInputField'>
          <label htmlFor='citizenIdentification' className='sbLabel'>
            CMND/CCCD <span>*</span>
          </label>
          <input
            className={`sbInput`}
            type='text'
            id='citizenIdentification'
            name='citizenIdentification'
            {...register('citizenIdentification')}
          />
          {errors.citizenIdentification && <p className='sbValidate'>{errors.citizenIdentification?.message}</p>}
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

export default EmployeeSideBarNextOne;
