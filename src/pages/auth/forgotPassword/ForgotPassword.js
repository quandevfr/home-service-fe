import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { regexEmail } from 'src/utils/constants';
import { exactRouter } from 'src/routes/routes';
import './ForgotPassword.scss';

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email').matches(regexEmail, 'Sai định dạng email'),
});

const ForgotPassword = () => {
  const [email, setEmail] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setEmail(true);
  };

  const backToLogin = () => {
    if (location.pathname === `/admin/${exactRouter.forgotPassword}`) {
      navigate(`/admin/${exactRouter.signIn}`);
    } else if (location.pathname === `/${exactRouter.forgotPassword}`) {
      navigate(`/${exactRouter.signIn}`);
    }
  };

  return (
    <div id='forgotPassword'>
      <div className='fpHeader'>
        <h1 className='fpTitle'>{email ? 'Check your email' : 'Forgot password'}</h1>
        <p className='fpDesc'>
          {email
            ? 'Please check your inbox and click in the receive link to reset a password.'
            : 'Enter your registered email below to receive password reset instruction.'}
        </p>
      </div>
      <div className='fpBody'>
        {email ? (
          <>
            <button type='button' className='fpBtn'>
              Open email
            </button>
            <Link to={`/admin/auth/create-new-password`}>new</Link>
            <div className='fpResendText'>
              <span>Did’t receive the link? </span>
              <span className='fpResend'>Resend</span>
            </div>
          </>
        ) : (
          <>
            <form className='fpForm' onSubmit={handleSubmit(onSubmit)}>
              <div className='fpFormGroup'>
                <label htmlFor='email' className='fpLabel'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={`loginInputTxt ${errors.email && 'loginInputTxtError'}`}
                  {...register('email')}
                />
                {errors.email && <p className='loginValidate'>{errors.email?.message}</p>}
              </div>
              <button type='submit' className='fpBtn'>
                Send forgot password
              </button>
            </form>

            <div onClick={backToLogin} className='fpLink'>
              Back to Log In
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
