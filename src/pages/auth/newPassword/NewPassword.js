import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { regexPassword } from 'src/utils/constants';
import { exactRouter } from 'src/routes/routes';

import './NewPassword.scss';

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Vui lòng nhập mật khẩu mới')
    .matches(regexPassword, 'Mật khẩu bao gồm chữ in hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 ký tự.'),
  passwordConfirm: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu mới')
    .oneOf([yup.ref('newPassword'), null], 'Mật khẩu không trùng khớp'),
});

const NewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (location.pathname === `/admin/${exactRouter.createNewPassword}`) {
      navigate(`/admin/${exactRouter.signIn}`);
    } else if (location.pathname === `/${exactRouter.createNewPassword}`) {
      navigate(`/${exactRouter.signIn}`);
    }
  };

  return (
    <div id='newPassword'>
      <div className='npHeader'>
        <h1 className='npTitle'>Create new password</h1>
        <p className='npDesc'>Your new password must be different from previous used passwords.</p>
      </div>

      <div className='npBody'>
        <form className='npForm' onSubmit={handleSubmit(onSubmit)}>
          <div className='npFormGroup'>
            <label htmlFor='newPassword' className='npLabel'>
              Password
            </label>
            <input
              type='password'
              id='newPassword'
              name='newPassword'
              className={`loginInputTxt ${errors.newPassword && 'loginInputTxtError'}`}
              {...register('newPassword')}
            />
            {errors.newPassword && <p className='loginValidate'>{errors.newPassword?.message}</p>}
          </div>

          <div className='npFormGroup'>
            <label htmlFor='newPassword' className='npLabel'>
              Confirm password
            </label>
            <input
              type='password'
              id='passwordConfirm'
              name='passwordConfirm'
              className={`loginInputTxt ${errors.passwordConfirm && 'loginInputTxtError'}`}
              {...register('passwordConfirm')}
            />
            {errors.passwordConfirm && <p className='loginValidate'>{errors.passwordConfirm?.message}</p>}
          </div>

          <button type='submit' className='npBtn'>
            Reset and login
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
