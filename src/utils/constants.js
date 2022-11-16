// Base URL
export const baseURL = process.env.REACT_APP_BASE_URL;

// Auth URL
export const authURL = {
  auth: 'auth',
  login: 'login',
  forgotPassword: 'forgot-password',
  createNewPassword: 'create-new-password',
};

export const checkRole = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
};

// LocalStorageAuth
export const localStorageAuth = {
  ACCESS_TOKEN: 'access_token',
  USER_PROFILE: 'user_profile',
};
export const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

export const regexPassword =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/; // eslint-disable-line
