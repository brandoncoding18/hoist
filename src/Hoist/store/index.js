import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Login/loginReducer";
import programReducer from "../Programs/programReducer";
import registerReducer from "../Signup/registerReducer";
const store = configureStore({
  reducer: {
    loginReducer, programReducer, registerReducer,

  },
});
export default store;