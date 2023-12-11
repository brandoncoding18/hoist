import { useState } from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {setProgram, setCurrent} from "./programReducer"
import Templates from "./Creator/Templates";
import '../../App.css'; 
function Programs() {
    const [date, changeDate] = useState(new Date());
    const {user} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const {programs} = useSelector((state) => state.programReducer);
    const {current} = useSelector((state) => state.programReducer);
    //alert(JSON.stringify(programs[current].current)); 


   
    //return(<div>{JSON.stringify(programs)}</div>)

    
    return(<div> Programs: 
    
    {   
        programs.map((program, index) => (
            <div style={{backgroundColor: 'pink'}}>
            <h4>Program Name: {program.name}</h4>
            <h4>Length : {program.weeks.length} week(s)</h4>
            <Link
                onClick={() => {
                    dispatch(setProgram(program))
                    dispatch(setCurrent(index))

                    alert(JSON.stringify(program.current)); 

                   // dispatch(setCurrent(program.current))

                }
                }
                key={index}
                to={`/Programs/Calendar/${program._id}`}
                className={`list-group-item`}>
                {program.name}
                
            
            </Link>
            <h3><Link to={"./Creator"}><button style={{backgroundColor:'pink'}}onClick={() => dispatch(setProgram(program))}
            >Edit</button></Link></h3>

            
         
            </div>
            
            
        ))
        
        
    }

<h3><Link to={"./Creator"}><button style={{backgroundColor:'pink'}} onClick={() =>  { 
let p = Templates.sampleprogram;
p._id = programs.length + 1; 
dispatch(setProgram(JSON.parse(JSON.stringify(p))))
}}
>Add</button></Link></h3>
    
    
    
    
    </div>)
    
    

}

export default Programs