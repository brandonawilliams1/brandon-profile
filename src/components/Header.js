import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div>
           <NavLink to="/">Info</NavLink>
           <NavLink to="/Works">Projects</NavLink>

          
          

        </div>
    )
}