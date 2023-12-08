import { useSelector } from "react-redux";
import { useState } from "react";
import Database from "../Database";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Profile() {
    const {user} = useSelector((state) => state.loginReducer);
    let currUser = "None" 
    if(user){
        currUser = Database.users.find((u) =>u .username === user); 

    }

    const [maxes, setMaxes] = useState(currUser.maxes);
    const [currentMax, setCurrentMax] = useState(maxes[0])

    /*
    const [maxSquat, setMaxSquat] = useState(currUser.maxSquat);
    const [maxBench, setMaxBench] = useState(currUser.maxBench);
    const [maxDeadlift, setMaxDeadlift] = useState(currUser.maxDeadlift);
    const [maxOverhead, setMaxOverhead] = useState(currUser.maxOverhead);
    const [maxRow, setMaxRow] = useState(currUser.maxRow);
*/
    if(!user) {
        return (<div>Profile</div>)
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

    return(<div>Profile
        <h4>Track your maxes here, and view your progression of each of your lifts on a graph!</h4>
        {}
        <h6> {maxes[0] || "You have no recorded maxes"} </h6>
        <button>&larr;</button>
        <button>&rarr;</button>
        
        
        
        </div>)
}
export default Profile