import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "./loginReducer"
import { setProgram, setPrograms } from "../Programs/programReducer";
import Database from "../Database";
import { useState } from "react";
import { useNavigate } from "react-router";
import registerReducer from "../Signup/registerReducer";
import {users} from "../Signup/registerReducer.js"
import "./styles.css"
function Login() {
    const {user} = useSelector((state) => state.loginReducer);
    const {programs} = useSelector((state) => state.programReducer);
    const {users} = useSelector((state) => state.registerReducer)
    const dispatch = useDispatch();
    const name = "bw"
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
      username: "", password: "" });
    const navigate = useNavigate();
    const signin = () => {
      try {
          let p = Database.calendars.filter((c) => c.username === credentials.username && c.password === credentials.password)
          //alert(JSON.stringify(users))
          let user = users.find((u) => u.username  === credentials.username && u.password === credentials.password)
          //alert(JSON.stringify(user))

          let maxes = user.maxes;
          dispatch(login({user, maxes}))
         // alert(JSON.stringify(user))

          {dispatch(setPrograms(p))}
          navigate("/Profile")

      }
       catch (err) {
        setError('Incorrect login, please retry with your username and password');
      }
      
    };

    
    return(<div>
      <div className="login"> Login
      <div className="error">{error && <div>{error}</div>}</div>
      

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

      <button className="button" onClick={signin}>
        Login
      </button>
      </div>
    </div>
  );
  }
        
      

export default Login;