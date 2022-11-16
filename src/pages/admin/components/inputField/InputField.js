import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import './InputField.scss';

const schema = yup.object().shape({
  service: yup.string().required('Vui lòng nhập email'),
  price: yup.string().required('Vui lòng nhập password'),
});

const InputField = ({ label }) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='inputField'>
      <label htmlFor={label} className='loginLabel'>
        {label}
      </label>
      <input className={`loginInputTxt`} type='text' id={label} name={label} {...register(label)} />
      {errors.service && <p className='loginValidate'>{errors.service?.message}</p>}
    </div>
  );
};

export default InputField;
