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
        <p className='main-status'>
          Software Engineer with a strong foundation in software engineering using technologies such as JavaScript HTML, CSS, and React. Proven ability to work in a team environment and experience with agile methodologies. Strong analytical and problem-solving skills with a passion for building the future of the user experience across the web.</p>
        <div className='main-btn'>
          <NavLink onClick={showModal} to='/'>see work</NavLink>
        </div>

        {modalActive && <Modal showModal={showModal} />}
      </div>

    </div>
    )
}