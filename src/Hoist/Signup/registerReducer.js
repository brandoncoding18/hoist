import { createSlice } from "@reduxjs/toolkit";
import Database from "../Database";
const initialState = {
    users : Database.users
};

const registerSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signup : (state, action) => {
        let user = { "_id": state.users.length + 1, "username": action.payload.username, "password" : action.payload.password, "name" : "", "email" : "", "age" : "", "maxes" : {}}
        state.users.push(user); 


    },
   


  },
  

  

});
export const { signup } = registerSlice.actions;
export default registerSlice.reducer;