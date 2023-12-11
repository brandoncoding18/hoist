import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "./loginReducer"
import { setProgram, setPrograms } from "../Programs/programReducer";
import Database from "../Database";
import { useState } from "react";
import { useNavigate } from "react-router";
import registerReducer from "../Signup/registerReducer";
import {users} from "../Signup/registerReducer.js"
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
          alert(JSON.stringify(users))
          let user = users.find((u) => u.username  === credentials.username && u.password === credentials.password)
          alert(JSON.stringify(user))

          let maxes = user.maxes;
          dispatch(login({user, maxes}))
          alert(JSON.stringify(user))

          {dispatch(setPrograms(p))}
          navigate("/Profile")

      }
       catch (err) {
        setError('Incorrect Login');
      }
      
    };

    
    return(<div>
      <h1 style={{backgroundColor: 'pink', display: 'fixed'}}> Login</h1>
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
      <button onClick={signin}>
        Login
      </button>
    </div>
  );
  }
        
      

export default Login;