import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user : "guest",
    maxes : {}
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login : (state, action) => {
        state.user = action.payload.user.username; 
        state.maxes = action.payload.maxes;

    },
    logout : (state) => {
        state.user = null; 
        state.maxes = null;

    },

  

    addMax : (state, action) => {
     // alert("Before: " + JSON.stringify(state.maxes))
      state.maxes[action.payload.name] = {"max" : action.payload.max, "date" : action.payload.date}; 
     // alert("After: " + JSON.stringify(state.maxes))

    } 


  },
  

  

});
export const { login, logout, addMax } = loginSlice.actions;
export default loginSlice.reducer;