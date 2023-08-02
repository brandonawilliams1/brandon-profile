import './styles/Header.css'
import { NavLink } from "react-router-dom";
import { Close, MenuOutlined } from '@material-ui/icons';
import React,{ useState } from 'react';


export default function Header(){
    const [active,setActive] = useState(false)

        const showHam = () => {
        setActive(!active)
        }
    return(
        <div className='header'>
        
        <div className="logo">
            <span>Brandon</span>
        </div>

        <nav>
            <ul className={active ? "list-items active" : "list-items"}>

            <div className="close-icon">
                     <Close className='close' onClick={showHam}/>
                </div>

                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/works'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>


        <div className="menu-icon">
            <MenuOutlined className='icon' onClick={showHam}/>
        </div>
    </div>
    )
}