import Links from "../links";
import { Link, useLocation } from "react-router-dom";
import"./styles.css"
function HoistNavigation() {
    const pathname = useLocation().pathname; 
    

    
    return(

        
        <div className="list-group"> 
            {
            
            Object.keys(Links).map((link, index) => 
            
            (<Link
            
                key={index}
                to={`/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
                {link}
                
            
            </Link>
            
            )
            )
            
            }

        </div>
        
    )
    
}
export default HoistNavigation