import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Login/loginReducer";
import programReducer from "../Programs/programReducer";
const store = configureStore({
  reducer: {
    loginReducer, programReducer

  },
});
export default store;