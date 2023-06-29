import { NavLink } from "react-router-dom";
import './styles/Info.css';
import Header from './Header';
import Section from './Section';
import Testimonials from './Testimonials';




export default function Info(){
    return(
        <>
            <Header />
            <Section />
            <div className='info-section'>

                <div className="info-about">
                    <h3>About <span>Brandon</span></h3>
                    <p className='info-about-status'>
                        Currently I am employed as a Cable Installer, I a 15 year veteren of the communications industry, my experience includes Cable television, Broadband Internet, IPoV Telephony, Wan/Lan Neworking and Fiber Optic modem setup.
                    </p>
                    <div className="info-btn">
                        <NavLink to='/'>More</NavLink>
                    </div>
                </div>


                <div className="info-content">
                    <h1>SKILLS </h1>
                    <p>GitHub</p>
                    <p>Git</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>Excellent Communication</p>
                    <p>Problem Solving</p>
                    <p>MongoDB</p>
                    <p>Adaptability</p>
                    <p>React</p>
                    <p>Heroku</p>
                    <p>Critical Thinking</p>
                    <p>API REST</p>
                    <p>Node</p>
                    <p>MySQL</p>
                </div>
            </div>
            <Testimonials />
        </>   
    )
}