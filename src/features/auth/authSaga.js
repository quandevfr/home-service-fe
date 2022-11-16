import { call, put, takeLatest } from 'redux-saga/effects';
import authApi from 'src/apis/auth';
import { checkRole, localStorageAuth } from 'src/utils/constants';
import { authActions } from './authSlice';
import { history } from 'src/utils/history';

function* handleLogin(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    const data = res.data.data;
    console.log(`[authSaga] handleLogin data -> ${JSON.stringify(data, null, 2)}`);
    const userProfile = data.user;

    // localStorage.setItem(localStorageAuth.ACCESS_TOKEN, data.token);
    localStorage.setItem(localStorageAuth.ACCESS_TOKEN, data.token || 'mKZGDcJntjbQ4GHbAG5AFlFL9v9jadKg');
    localStorage.setItem(localStorageAuth.USER_PROFILE, JSON.stringify(userProfile));

    if (data.user.role === checkRole.ADMIN) {
      yield put(authActions.loginSuccess(data));
      history.push('/admin/services');
    }
  } catch (error) {
    // yield put(authActions.loginFailure(error.res.data.message) || error);
    console.log(error);
  }
}

function* handleLogout() {
  yield call([localStorage, localStorage.clear]);
  history.push('/auth/login');
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.logout.type, handleLogout);
}
