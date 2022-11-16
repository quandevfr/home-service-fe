import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageAuth } from 'src/utils/enum';

/**
 * accessToken<string>: token
 * userProfile<object>: information of current user
 * loading<boolean>: set loading call api
 * message<string>: notification user dispatch action
 */
const initialState = {
  accessToken: localStorage.getItem(LocalStorageAuth.ACCESS_TOKEN) || null,
  userProfile: JSON.parse(localStorage.getItem(LocalStorageAuth.USER_PROFILE)) || {},
  isLoading: false,
  message: null,
  isStatus: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },

    loginSuccess(state, action) {
      state.isLoading = false;
      state.accessToken = action.payload.token;
      state.userProfile = action.payload.user;
    },

    loginFailure(state, action) {
      state.isLoading = false;
      state.isStatus = false;
      state.message = action.payload;
    },

    logout(state) {
      state.isLoading = false;
      state.accessToken = null;
      state.userProfile = {};
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selector
export const selectAuthToken = (state) => state.auth.accessToken;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthUserProfile = (state) => state.auth.userProfile;
export const selectAuthMessage = (state) => state.auth.message;
export const selectAuthStatus = (state) => state.auth.isStatus;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
