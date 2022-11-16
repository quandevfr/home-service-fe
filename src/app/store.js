import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rootSaga from './rootSaga';

import authReducer from 'src/features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
