import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "./loginReducer"
import { setProgram, setPrograms } from "../Programs/programReducer";
import Database from "../Database";
function Login() {
    const {user} = useSelector((state) => state.loginReducer);
    const {programs} = useSelector((state) => state.programReducer);

    const dispatch = useDispatch();
    const u = "brandon"


    
    return(<div>
        Login
        
        <button onClick={() => {
            let p = Database.calendars.filter((c) => c.user === u)
            alert(JSON.stringify(p))
            dispatch(login({u}))

            {dispatch(setPrograms(p))}}}>
        Log In </button>
        <button onClick={() => {
            dispatch(logout())
            {dispatch(setPrograms(""))}}}>
        Log Out </button>
        <h2>{user}</h2>


        </div>)
}
export default Login