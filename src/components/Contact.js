import './styles/Contact.css';
import { NavLink } from "react-router-dom";

export default function Contact() {
    return (
          <div className='contact'>
  
          <h1>Contact us</h1>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Message' className='input-message'/>
          <NavLink to='/'>send</NavLink>
  
    </div>)
  };