import { useState } from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {setProgram, setCurrent} from "./programReducer"

function MostRecent() {
    const [date, changeDate] = useState(new Date());
    const {user} = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const {programs} = useSelector((state) => state.programReducer);

   
    //return(<div>{JSON.stringify(programs)}</div>)

    const program = programs[programs.length - 1];
    return(<div>Jump back into any one of your current programs: 
    
    {   
        
        
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
                //key={index}
                to={`/Programs/Calendar/${program._id}`}
                className={`list-group-item`}>
                {program.name}
                
            
            </Link>
            <h4>--------------------------------------</h4>

            
         
            </div>
            
            
        
        

    }

    

    
    
    
    
    </div>)
    
    

}

export default MostRecent