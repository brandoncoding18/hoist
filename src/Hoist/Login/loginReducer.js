import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user : null,
    maxes : null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login : (state, action) => {
        state.user = action.payload.u; 
        state.maxes = state.user.maxes;

    },
    logout : (state) => {
        state.user = null; 
        state.maxes = null;

    },

  },
  

  

});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;