import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.status = true;
      state.status = action.payload.userData;
    },

    setLogout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions; // exporting method/actions inside reducer

export default authSlice.reducer; // exporting reducer
