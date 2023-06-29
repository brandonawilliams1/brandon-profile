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
                    I am a software engineer, I'm experienced with frontend and backend software engineering. I currently build full-stack web applications using a variety of technologies such as MongoDB, a document database, Express.js a robust minimal yet flexible web application framework, React which is a frontend JavaScript user interface library, and last but not least Node allows you to run JavaScript without needing the browser and designed to build scalable network applications. These technologies have allowed me to build scaleable robust and dynamic full-Stack web applications.
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