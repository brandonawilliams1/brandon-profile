import './styles/Info.css';
import { NavLink } from "react-router-dom";
import Header from './Header';
import Section from './Section';
import Testimonials from './Testimonials';



{/* <Header /> */}
export default function Info(){
    return(
        <>
            
            <Section />
            <div className='info-section'>

                <div className="info-about">
                    <h3>About <span>Brandon</span></h3>
                    <p className='info-about-status'>
                    I am a software engineer, I'm experienced with frontend and backend software engineering. Currently I build full-stack web applications using a variety of technologies such as MongoDB or MySQL as the database, Express.js used for building server-side applications and APIs in Node.js, a simple and flexible way to handle HTTP request and responses. React which is a frontend JavaScript library used to make modular user interfaces and manage the state of applications, and last but not least Node.js which allows you to run server-side JavaScript without needing to use the browser and designed to build scalable network applications. These technologies have allows me to build scaleable robust and dynamic full-Stack web applications.
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