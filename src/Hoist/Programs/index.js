import { useState } from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {setProgram, setCurrent} from "./programReducer"
import Templates from "./Creator/Templates";
function Programs() {
    const [date, changeDate] = useState(new Date());
    const {user} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const {programs} = useSelector((state) => state.programReducer);
    

   
    //return(<div>{JSON.stringify(programs)}</div>)

    
    return(<div> Programs: 
    
    {   
        programs.map((program, index) => (
            <div>
            <h4>--------------------------------------</h4>
            <h4>Program Name: {program.name}</h4>
            <h4>Length : {program.weeks.length} week(s)</h4>
            <Link
                onClick={() => {
                    dispatch(setProgram(program))
                    dispatch(setCurrent(program.current))

                }
                }
                key={index}
                to={`/Programs/Calendar/${program._id}`}
                className={`list-group-item`}>
                {program.name}
                
            
            </Link>
            <h3><button>Delete</button></h3>
            <h4>--------------------------------------</h4>

            
         
            </div>
            
            
        ))
        
        
    }

<h3><Link to={"./Creator"}><button onClick={() => dispatch(setProgram(JSON.parse(JSON.stringify(Templates.sampleprogram))))}
>Add</button></Link></h3>
    
    
    
    
    </div>)
    
    

}

export default Programs