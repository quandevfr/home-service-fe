import { authURL } from 'src/utils/constants';
import axiosClient from './axiosClient';

const authApi = {
  login(params) {
    const url = `/${authURL.auth}/${authURL.login}`;
    return axiosClient.post(url, params);
  },

  forgotPassword(body) {
    const url = `/${authURL.auth}/${authURL.forgotPassword}`;
    return axiosClient.post(url, body);
  },

  createNewPassword(body) {
    const url = `/${authURL.auth}/${authURL.createNewPassword}?token=${body.token.token}`;
    return axiosClient.post(url, body);
  },
};

export default authApi;
