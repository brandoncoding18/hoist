import { useSelector } from "react-redux";
import { useState } from "react";
import Database from "../Database";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
import { useParams } from "react-router";
import loginReducer from "../Login/loginReducer";
import registerReducer from "../Signup/registerReducer";
import "./styles.css"
function Profile() {
    var {user} = useSelector((state) => state.loginReducer)
    var {users}= useSelector((state) => state.registerReducer)
    user = users.find((u) => u.username == user)
    const {maxes} = useSelector((state) => state.loginReducer)
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user.username);
    const [firstname, setFirstName] = useState(user.name);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);




    const stored = {name, firstname, password, email, age};
    
    
    function handleEditComplete(result) {
       // console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setFirstName(result.firstname);
            setPassword(result.password);
            setEmail(result.email);
            setAge(result.age);


        }        
        setEditMode(false);
    }
   



        
    const maxKeys = Object.keys(maxes)
    const maxVals = Object.values(maxes)
    var content = <div className="prof">Profile
    {
            editMode
                ? <>
                    <EditableUserProfile
                            stored={stored}
                            editCompleteCallback={handleEditComplete}                            
                    />
                </>
                : <>
                    <UserProfile
                            stored={stored}
                            startEditCallback={() => setEditMode(true)}
                    />
                </>
        }
        </div>

    if(user.username === 'guest') {
        content = (<div>Log in or register to view your profile</div>); 
        return(content)

    }
     else if(maxKeys.length > 0) {
        return(<div className="prof">
            {content}
                Maxes: 
                <div>{
                    maxVals.map((v, index) => {return(<div>Exercise: {JSON.stringify(maxKeys[index])} Max: {JSON.stringify(v.max)}</div>)})
                }
                </div>
                    
                    

                 


            
            
             
            
        </div>);
            


    }
    return(<div className>
        {content} 

        <h4 className="prof">No maxes found for this user, start programming to get maxes assigned to you</h4>
       

    </div>)
    
    }    
        
        
        

    /*
    return(<div>Profile
    <h1>Track your maxes here, and view your progression on a graph!</h1>

    <h3>Max Squat: {maxSquat} </h3>
    <h3>Max Bench: {maxBench}</h3>
    <h3>Max Deadlift: {maxDeadlift}</h3>
    <h3>Max Shoulder Press: {maxOverhead}</h3>
    <h3>Max Barbell Row: {maxRow}</h3>
    
    
    
    </div>)
    */
   
export default Profile