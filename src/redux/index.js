import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../features/auth/services/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
