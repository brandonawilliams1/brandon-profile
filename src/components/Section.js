import { NavLink } from 'react-router-dom';
import React,{useState} from 'react';
import './styles/Section.css'
import Modal from './Modal';


export default function Section(){
    const [modalActive,setModalActive] = useState(false)

    const showModal = () => {
        setModalActive(!modalActive)
    }
    return(
        <div className='main'>


      <div>
        <h1 className='main-header'>Hello, and welcome to my page my name is <span>Brandon Williams</span> </h1>
        <p className='main-status'>I am a software engineer, I'm experienced with frontend and backend software engineering. I currently build full-stack web applications using a variety of technologies such as MongoDB, a document database, Express.js a robust minimal yet flexible web application framework, React which is a frontend JavaScript user interface library, and last but not least Node allows you to run JavaScript without needing the browser and designed to build scalable network applications. These technologies have allowed me to build scaleable robust and dynamic full-Stack web applications.</p>
        <div className='main-btn'>
          <NavLink onClick={showModal} to='/'>see work</NavLink>
        </div>

        {modalActive && <Modal showModal={showModal} />}
      </div>

    </div>
    )
}