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
      <h1 style={{backgroundColor: 'pink', display: 'fixed'}}> Signup</h1>
      {error && <div>{error}</div>}
      User
      <input style={{marginLeft : "75px"}}
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
          <br/>
        Password
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={register}>
        Register
      </button>
    </div>
  );
  }
        
      

export default Signup;