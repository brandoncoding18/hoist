import { setProgram } from "../programReducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { json, useParams, Link } from "react-router-dom";
import Database from "../../Database";
import RPE from "../RpeChart";
import { current } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client'
import programReducer from "../programReducer";
import "./helpers.js"
import { getMax } from "./helpers.js";
function Workout() {
    //let program = useParams(); 
    var {user} = useSelector((state) => state.loginReducer);
    const {programs} = useSelector((state) => state.programReducer);
    user = Database.users.find((u) =>u .username === user); 
    
    //const calendar = program.find((c) => c._id === program)
    const {current}= useSelector((state => state.programReducer));

    var week = (programs[current].weeks.find((w) => w.weekno === programs[current].current.week))
    var day = (week.days.find((d) => d.dayno ===  programs[current].current.day))
    var exercise = (day.exercises.find((e) => e.exno ===  programs[current].current.exercise))
    var set = (exercise.sets.find((s) => s.setno ===  programs[current].current.set))

    
    
    //const [currentWeight, setCurrentWeight] = useState(weight);
    
    
    return(<div>
        
        <h1>Today's workout: </h1>
        <h2> Week {programs[current].current.week}, Day {programs[current].current.day}</h2>
        <h2>  </h2>
    
        <h3>Preview: </h3>
        {day.exercises.map((ex) => {

                return(<div>
                    {(ex.name)}as
                    
                    {ex.sets.map((s) => {
                        var intensity = RPE[s.rpe][s.reps]
                        var weight = Math.floor((getMax(exercise.name, user) * RPE[s.rpe][s.reps])/5) * 5; 
                        return(<div> Set: {s.setno} Reps: {s.reps}  Intensity: {intensity} RPE: {s.rpe} Weight: {weight}</div>)    
                     })}
                
                
                
                
                
                
                
                
                </div>)})}


                <Link to={`./TodaysWorkout`}><button> Begin</button></Link>
                
            

                
                
                
                
             

      

        


        




        

        




        
        
        </div>)
        
}
export default Workout