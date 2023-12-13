import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "../Login/loginReducer"
import { setProgram, setPrograms } from "../Programs/programReducer";
import Database from "../Database";
import { useState } from "react";
import { useNavigate } from "react-router";
import registerReducer from "./registerReducer";
import { signup } from "./registerReducer";
function Signup() {
    const {user} = useSelector((state) => state.loginReducer);
    const {programs} = useSelector((state) => state.programReducer);
    const {users} = useSelector((state) => state.registerReducer);
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
      username: "", password: "" });
    const navigate = useNavigate();
    const  register = async() => {
    //  try {
         
          let username = credentials.username;
          let password = credentials.password; 
          await dispatch(signup({username : username, password : password}))
          navigate("../Login")

     // }
       /*catch (err) {
        setError('Incorrect Login');
      }
      */
      
    };

    
    return(<div>
      <div className="login"> Signup
      {error && <div>{error}</div>}
      

      <div className='input'>
        User
      <input className="input-box"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
          </div>

     
        <div className="input">
        Password
      <input className="input-box"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
          </div>

      <button className="button" onClick={register}>
        Sign up
      </button>
      </div>
    </div>
  );
  }
        
      

export default Signup;