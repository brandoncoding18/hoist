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
function TodaysWorkout() {
    /*
   
    
   
    const [currentSet, setCurrentSet] = useState(0); 
    */
    //let program = useParams(); 

    //program = program.name

    //const calendar = Database.calendars.find((c) => c._id === program)
    const {program, current} = useSelector((state) => state.programReducer)
    var {user} = useSelector((state) => state.loginReducer);
    user = Database.users.find((u) => u.username === user); 
    let p = useSelector((state => state.programReducer));

    var day = 1
    var count = 1; 

    const [ERPE, setERPE] = useState(6)
    const dispatch = useDispatch();
    //dispatch(setProgram(program))
    const [finished, setFinished] = useState(false)
    const [lastButton, setLastButton] = useState(false);



    const handleSubmit = (event) => {
        const temp = ERPE;
        event.preventDefault()
        
        

      }
      

    
    var week = (program.weeks.find((w) => w.weekno === p.current.week))
    var day = (week.days.find((d) => d.dayno === p.current.day))
    var exercise = (day.exercises.find((e) => e.exno === p.current.exercise))
    var set = (exercise.sets.find((s) => s.setno === p.current.set))
    

    
    var weight = set.weight; 
    
    if(user.maxes['exercise.name']) {
        weight =  Math.floor( ( user.maxes[exercise.name]// getMax(exercise.name, user)
        * RPE[set.rpe][set.reps])/5) * 5 
    }
       
    const [currentWeight, setCurrentWeight] = useState(weight);
    


    
    if(day > current.day.weekno ) {

        if(p.current.day + 1 > week.days.length) {
            dispatch(incrementDay());
        }
        else {

        }      

        return(<div>Workout finished!
            Start another workout? 
            <Link to="../">"<button>Yes</button></Link>
            <Link to="/Home">"<button>No</button></Link>

        </div>)


    }
    else {
        return(<div>
            Calendar    | ID: {program.name} | NAME: {program.name}| WeekNumber: {p.current.week} | DayNumber : {p.current.day} | ExerciseNumber : {p.current.exercise} | SetNumber : {p.current.set}
            <h2>{user.username}</h2> 
    
          
            
    
    
            
    
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
                                    <input type="number" id="ERPE" name="ERPE" min="6" max="10" onChange={(e) =>  setERPE(e.target.value)}></input>
                                    <input type="submit" onClick={(e) =>{ 
                                       
                                            var newMax = Math.ceil((weight / RPE[ERPE][set.reps])/5) * 5 
                                            setMax(exercise.name, newMax, user)
                                           // p.current.set < exercise.sets.length  ? incrementDay() : setFinished(true)
                                            dispatch(incrementDay())
                                            
                                        
    
    
    
                                        
        
                                         
    
                                        
                                    
                                    
                                    }}/>
                                    </form>
    
                      
    
                    
               
                    
                    
               
        <button onClick={() => 
            Database.calendars.find((c) => c._id === program._id).current = program.current
             
        }>Save</button>

            </div>
    
    
    
    
            
            
            </div>)

    }
    
        
}
export default TodaysWorkout