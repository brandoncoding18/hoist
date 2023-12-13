import { useState } from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {setProgram, setCurrent} from "./programReducer"
import Templates from "./Creator/Templates";
import '../../App.css'; 
import './styles.css'

function Programs() {
    const [date, changeDate] = useState(new Date());
    const {user} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const {programs} = useSelector((state) => state.programReducer);
    const {current} = useSelector((state) => state.programReducer);
    //alert(JSON.stringify(programs[current].current)); 


   
    //return(<div>{JSON.stringify(programs)}</div>)

    
    return(<div className="programs"> Programs: 
    
    {   
        programs.map((program, index) => (
            <Link
                onClick={() => {
                    dispatch(setProgram(program))
                    dispatch(setCurrent(index))
                }
                }
                key={index}
                to={`/Programs/Calendar/${program._id}`}
                >
                
            
                
                <div className="program-box">
                <h4>Program Name: {program.name}</h4>
                <h4>Length : {program.weeks.length} week(s)</h4>
            <h3><Link to={"./Creator"}><button class="button" onClick={() => dispatch(setProgram(program))}
            >Edit</button></Link></h3>


         
            </div>
                
            
            </Link>
           
            
            
        ))
        
        
    }

<h3><Link to={"./Creator"}><button className="button" onClick={() =>  { 
let p = Templates.sampleprogram;
p._id = programs.length + 1; 
dispatch(setProgram(JSON.parse(JSON.stringify(p))))
}}
>Add</button></Link></h3>
    
    
    
    
    </div>)
    
    

}

export default Programs