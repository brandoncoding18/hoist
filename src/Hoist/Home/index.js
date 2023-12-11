import React, {useState} from "react"
import { useSelector } from "react-redux";
import TodaysWorkout from "../Programs/WorkoutCalendar/todaysworkout";
import Programs from "../Programs";
import { Link } from "react-router-dom";
import MostRecent from "../Programs/MostRecent";
function Home() {
    const {user} = useSelector((state) => state.loginReducer);
    if(user !== "guest") {
        return (<div style={{color: 'black'}}>
            Welcome back, {user}!

            <div>Jump back into any one of your current programs: 
                <Programs/></div>



        </div>)

    }
    return (<div> <div style={{textAlign: 'center'}}>Welcome to Hoist! <Link to="/Login">Login</Link> or <Link>Signup</Link> to start making your weight training programs today!</div>
    
    
    <h4>About Hoist: </h4>
    <h5 style={{backgroundColor: 'pink', border : 'double', borderColor : 'black', margin: '20px'}}>Hoist is a site designed specifically around making your strength training goals attainable. The purpose of this site is to track your maxes in various exercises, as well as dynamically adjust your workouts depending on how much effort your set takes that day. When it comes to math and designing your programs, let us do our share of the heavy lifting so you don't have to.</h5>
    
    </div>)

}
export default Home