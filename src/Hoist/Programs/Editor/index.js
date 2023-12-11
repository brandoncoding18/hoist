import { useStore, useSelector } from "react-redux";
import {useState} from "react"
import { Link } from "react-router-dom";
import Database from "../../Database";
import Templates from "./Templates";
import { useDispatch } from "react-redux";

import "./styles.css"
import programReducer, { addToPrograms, setProgram} from "../programReducer";

function Editor() {
    const [program, setProgram]= useState(JSON.parse(JSON.stringify(Templates.sampleprogram)))
    const [search, setSearch] = useState(""); 
    const [criteria, setCriteria] = useState(""); 

    const [muscle, setMuscle] = useState(""); 
    const [type, setType] = useState(""); 

    const [submit, setSubmit] = useState("");
    const {user} = useSelector((state) => state.loginReducer);
    //const {prog} = useSelector((state) => state.programReducer);
    var currProgram = program
    const dispatch = useDispatch();
    const {programs} = useSelector((state) => state.programReducer)
   

    const addWeek = () => {
        
        let newWeek = {...Templates.sampleweek, "weekno" : currProgram.weeks.length + 1}
        currProgram.weeks.push(newWeek)
        alert(currProgram.weeks[currProgram.weeks.length-1].weekno)
        setProgram({...program,});        //currProgram = program;
    }

    const deleteWeek = (week) => {
        let w = currProgram[week-1]; 

        let newWeeks = currProgram.weeks.filter((w) => w.weekno !== week)
        newWeeks.map((w, index) => w.weekno = index + 1)
        currProgram.weeks = newWeeks; 
        
        setProgram({...program,});        //currProgram = program;
    }

    const addDay = (week) => {
        let w = currProgram.weeks[week-1]
        
        let newDay = {...Templates.sampleday, "dayno" : w.days.length + 1}
        currProgram.weeks[week-1].days.push(newDay)
        setProgram({...program,});
        //currProgram = program;
    }

    const deleteDay = (week, day) => {
        let w = currProgram.weeks[week-1]
        
        let newDays = w.days.filter((d) => d.dayno !== day)
        newDays.map((d, index) => d.dayno = index + 1)
        
        currProgram.weeks[week-1].days = newDays
        if(newDays.length === 0) {
            deleteWeek(week); 
        }
        setProgram({...program,});

        //currProgram = program;
    }
    const addExercise = (week, day) => {
        let w = currProgram.weeks[week-1]
        let d = w.days[day-1]

        let newExercise = {...Templates.sampleexercise, "exno" : d.exercises.length + 1}
        currProgram.weeks[week-1].days[day-1].exercises.push(newExercise)
        setProgram({...program,});
        //currProgram = program;
    }

    const deleteExercise = (week, day, exercise) => {
       

        let w = currProgram.weeks[week-1]
        let d = w.days[day-1]
        let newExercises = d.exercises.filter((e) => e.exno !== exercise)

        newExercises.map((e, index) => e.exno = index + 1)

        currProgram.weeks[week-1].days[day-1].exercises = newExercises; 
        if(newExercises.length === 0) {
            deleteDay(week, day); 
        }
        setProgram({...program,});
        
        //currProgram = program;
    }
    

    const addSet = (week, day, exercise) => {
        let w = currProgram.weeks[week-1]
        let d = w.days[day-1]
        let e = d.exercises[exercise-1]

        let newSet = {...Templates.sampleset, "setno" : e.sets.length + 1}
        currProgram.weeks[week-1].days[day-1].exercises[exercise-1].sets.push(newSet)
        setProgram({...program,});
        //currProgram = program;
    }

    const updateExerciseName = (week, day, exercise, val) => {
       

        JSON.stringify(currProgram.weeks[week-1].days[day-1].exercises[exercise-1].name = val)//.exercises[exercise-1].sets[prop]))// = val; 
        setProgram({...program,});
        //currProgram = program;
    }

    const deleteSet = (week, day, exercise, set) => {
       

        let w = currProgram.weeks[week-1]
        let d = w.days[day-1]
        let e = d.exercises[exercise-1]
        var newSets = e.sets.filter((s) => s.setno !== set)
        newSets.map((s, index) => s.setno = index + 1)
        currProgram.weeks[week-1].days[day-1].exercises[exercise-1].sets = newSets; 
        if(newSets.length === 0) {
            deleteExercise(week, day, exercise); 
        }
        setProgram({...program,});
        //currProgram = program;
    }

    const parseVal = (val) => {
        let res = 0; 
        try {
            res = parseInt(val);
            return res >= 6 && res <= 10; 
        }
        catch(e) {
            return false; 
        }
    }
    const updateSetVals = (week, day, exercise, set, prop, val) => {
        if(prop === "rpe" &&  parseVal(val)) {
            currProgram.weeks[week-1].days[day-1].exercises[exercise-1].sets[set-1][prop] = val
        }
        else {
            try {
                let i = parseInt(val)
                if(i >= 0) {
                    currProgram.weeks[week-1].days[day-1].exercises[exercise-1].sets[set-1][prop] = val

                }

            }
            catch(e) {

            }

        }
        
        
        //JSON.stringify(currProgram.weeks[week-1].days[day-1].exercises[exercise-1].sets[set-1][prop] = val)//.exercises[exercise-1].sets[prop]))// = val; 
        setProgram({...program,});
        //currProgram = program;
    }

    /*
    const createProgram = () => {
        Database.calendars.push(

            [{ "_id": Database.calendars.length + 1, "user" : user, "name" : "16 Week Template", program}]

        );
        let p = Database.calendars;
        dispatch(setProgram({p}))
    }
    */

   

    const handleSearch = () => {
        alert('You searched for ' + search + "\n" +
        "API String: " + ""
        
        
        );
        
    }

   


    const updateProgramName = () => {
        setProgram({...program,});
        currProgram = program;
    }

   

    return(<div>
        
        Editor
        <br/>

        <h4>Looking for exercises to add to your program? </h4>
        <h4>Start here:</h4> 
        <form onSubmit={handleSearch}>



            <select name="criteria" id="criteria" onChange={(e) => setCriteria(e.target.value)}>
                        <option value="">Any  </option> 

                        <option value="type">Type</option> 
                        <option value="muscle">Muscle</option> 
                        <option value="name">Name</option> 
                        </select>
                        
                {(criteria === "type") 
                ? (<div>Type </div>) 
                : (criteria === "muscle" 
                    ? (<div>Muscle</div>) 
                    : (<div>Name</div>))}
                
            <input type="submit" value="Search for exercises" />
        </form>

        <h4>In order to set weights automatically via RPE, the names of exercises in your program MUST match those of an existing exercise in your maxes. Otherwise, the weight will default to what you put in the "Weight" column.</h4>
        <h4>Example: If your max for "Comp Squat" is recorded in your profile, using "Competition Barbell Squat" rather than "Comp Squat" will be recorded as a separate exercise. You can view your current maxes in Profile in order to make sure you are naming your exercises correctly.</h4>


       <h5>Name your program: 
       <input type="text" value={submit} onChange={(e)=> setSubmit(e.target.value)}/>        
       </h5>
        
            

        

        {program.weeks.map((w) => {

            
            return(<div class="week-title">

                Week {w.weekno}
                ----------------------------------


                <div class = "card">
                <div class= "card-body">
                
                    {
                        w.days.map((d) => {
                            return(
                            <div class="day-card"> 
                                
                                <div class="day-label">Day {d.dayno}
                                <div><button onClick={() => deleteDay(w.weekno, d.dayno)}>Delete Day</button></div>

                        
                            
                            
                                </div>
                            
                           
                                <div class = "list-exercises">
                                {d.exercises.map((e) => {
                                    
                                    return(
                                    <div class = "card-wrapper">
                                        
                                    <div class = "exercise-card">
                                    <input name="myInput"style={{width:'300px'}} onChange={(ev) => updateExerciseName(w.weekno, d.dayno, e.exno, ev.target.value)}  value={e.name}/>
                                   
                                        <div class = "card-wrapper">
                                            <div class = "set-card">Set</div>
                                            <div class = "set-card">Weight</div>
                                            <div class = "set-card">Reps</div>
                                            <div class = "set-card">RPE</div>
                                        </div>
                                        
                                                  
                                    
                                        {e.sets.map((s) => {
                                            return(
                                            <div>
                                                
                                            <div class = "card-wrapper">
                                                <div class = "set-card" style={{width:'29px'}}>
                                                <input type="number" style={{width:'87px'}} id="ERPE" name="ERPE" value={s.setno}></input>
                                                
                                                </div>
                                                <div class = "set-card"style={{width:'59px'}}>
                                                <input type="number" autoComplete="6" style={{width:'60px'}} id="ERPE" name="ERPE" min="0" onChange={(ev) =>  updateSetVals(w.weekno, d.dayno, e.exno, s.setno, "weight", ev.target.value)} value={s.weight}></input>
                                                                                                                
                                                </div>
                                                <div class = "set-card"style={{width:'39px'}}>
                                                <input type="number" autoComplete="0" style={{width:'39px'}} id="ERPE" name="ERPE" min="0" onChange={(ev) =>  updateSetVals(w.weekno, d.dayno, e.exno, s.setno, "reps", ev.target.value)} value={s.reps}></input>
                                                
                                                </div>
                                                <div class = "set-card"style={{width:'39px'}}>
                                                <input type="number" autoComplete="0" style={{width:'39px'}} id="ERPE" name="ERPE" min="6" max="10" onChange={(ev) =>  updateSetVals(w.weekno, d.dayno, e.exno, s.setno, "rpe", ev.target.value)} value={s.rpe}></input>

                                              
                                                </div>
                                                <button onClick={() => {deleteSet(w.weekno, d.dayno, e.exno, s.setno)} }>Delete</button>

                                               


                                    </div>


                                            </div>)
                                        })}
                                                                            <button onClick={() => addSet(w.weekno, d.dayno, e.exno)}>Add</button>

                                        </div>
                                        <div><button onClick={() => deleteExercise(w.weekno, d.dayno, e.exno)}>Delete Exercise</button></div>
                                       


                                    </div>
                                    
                                    
                                    
                                    )
                                    


                                })}
                                 <div><button onClick={() => addExercise(w.weekno, d.dayno)}>Add Exercise</button></div>
                                </div>
                                
                                
                                
                                
                            
                        
                            
                           
                            
                            </div>)
                            


                        })


                    }
                    <div><button onClick={() => addDay(w.weekno)}>Add Day</button></div>

                    </div>



                
                
                
                </div>
                
                <div><button onClick={() => deleteWeek(w.weekno)}>Delete Week</button></div>

 </div>)
                

        }
        )
        
        }

<div><button onClick={() => addWeek()}>Add Week</button></div>
<h1><button onClick={() => {
    if(user === null) {
       alert('Unimplemented move to login')
       // dispatch(addToPrograms(program, u, submit))

    }
    else {
        let header = { "_id": programs.length + 1, user, "name" : submit, "weeks" : program.weeks, "current" : {"week" : 1, "day" : 1, "exercise": 1, "set":1}};
        dispatch(addToPrograms(header))

    }
}

}>Save Program</button></h1>


        <Link to="/Programs"><button>hi</button></Link>
        
        
        </div>)

}
export default Editor