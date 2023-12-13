import { incrementDay, setProgram } from "../programReducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { json, useParams } from "react-router-dom";
import Database from "../../Database";
import RPE from "../RpeChart";
import { current } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./helpers.js"
import { getMax, setMax } from "./helpers.js";
import { addMax } from "../../Login/loginReducer.js";
function TodaysWorkout() {
    
    /*
   
    
   
    const [currentSet, setCurrentSet] = useState(0); 
    */
    //let program = useParams(); 

    //program = program.name
    const {programs, current} = useSelector((state) => state.programReducer)
    const [currentWorkout, setCurrentWorkout] = useState(programs[current].current.day)

    var {user} = useSelector((state) => state.loginReducer);
    user = Database.users.find((u) => u.username === user); 
    const {maxes} = useSelector((state) => state.loginReducer);

    var calendar = Database.calendars.find((c) => c._id === programs[current]._id)


    var day = 1
    var count = 1; 

    const [ERPE, setERPE] = useState(6)
    const dispatch = useDispatch();
    //dispatch(setProgram(program))
    



    const handleSubmit = (event) => {
    
        const temp = ERPE;
        event.preventDefault()
        
        

      }
      

    var set = {}
    var exercise = {}
    var day = {}
    var week = (programs[current].weeks.find((w) => w.weekno === programs[current].current.week))
    if(!week) {

        

    }
    else {
        try {
            day = (week.days.find((d) => d.dayno === programs[current].current.day))
            exercise = (day.exercises.find((e) => e.exno === programs[current].current.exercise))
            set = (exercise.sets.find((s) => s.setno === programs[current].current.set))

        }
        catch(e) {
            day = null
            exercise = null
            set = null
        }
        

    }
   
    

    
    var weight = set.weight; 
    
    /*
    if(maxes[exercise.name]) {
        weight =  Math.floor( ( maxes[exercise.name]// getMax(exercise.name, user)
        * RPE[set.rpe][set.reps])/5) * 5 
        alert(weight)
    }
    */
       
    const [currentWeight, setCurrentWeight] = useState(weight);
    


    
    if(!week) {

        return(<div>Program finished!
            Start another one? 
            <Link to="/Programs"><button>Yes</button></Link>
            <Link to="/Home"><button>No</button></Link>

        </div>)


    }
    else
    try {
         if(day.dayno > currentWorkout) {
                return(<div>Done</div>)
            }
            else {
                return(<div className="todays-exercise">
                   
            
                  
                    
            
            
                    
            
                    <h1>Week {week.weekno}</h1>
                    <div> 
                        <h2>Day {day.dayno}</h2>
                        <h3>Exercise: {exercise.name}</h3>
                        <h4>Set: {set.setno}</h4>
                        <h5>Weight: {weight }</h5>
                        <h5>RPE: {set.rpe}</h5>
                        <h5>Reps: {set.reps}</h5>
            
                        
            
            
                        <form onSubmit={handleSubmit}>
                                            <label>Estimated RPE:</label>
                                            <input type="number" id="ERPE" name="ERPE" value={ERPE} min="6" max="10" onChange={(e) =>  setERPE(e.target.value)}></input>
                                            <input type="submit" value="Submit RPE" onClick={(e) =>{ 
                                               
                                                
                                                    var newMax = Math.ceil((weight / RPE[ERPE][set.reps])/5) * 5 
                                                   // setMax(exercise.name, newMax, user)
                                                    dispatch(addMax({"name" : exercise.name, "max" : newMax, "date" : "" + programs[current].current.week + " " + programs[current].current.day}))
                                                   // p.current.set < exercise.sets.length  ? incrementDay() : setFinished(true)
                                                    dispatch(incrementDay())
                                                    
                                                
            
            
            
                                                
                
                                                 
            
                                                
                                            
                                            
                                            }}/>
                                            </form>
            
                              
            
                            
                       
                            
                            
                       
                
        
                    </div>
            
            
            
            
                    
                    
                    </div>)
        
            }
        }
        catch(e) {
            return(<div>An error has occured while trying to find program date: Week: {programs[current].current.week}Day: {programs[current].current.day}Exercise: {programs[current].current.exercise}Set: {programs[current].current.set}, please edit your program to add these additional days. In the future, please refrain from editing a program while doing your workout for the day, as it will corrupt the data on the site.</div>)
        }
    
   
    
        
}
export default TodaysWorkout