import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 0,
    name: '',
    email: '',
    latitude: '',
    longitude: '',
  },
  authorization: {
    token: '',
  },
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, {payload}) {
      state = payload;
    },
  },
});

export const {setUserData} = AuthSlice.actions;

export default AuthSlice.reducer;
