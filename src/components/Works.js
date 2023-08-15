import './styles/Works.css';
import './styles/WorksCard.css';
import img1 from './assets/screenshot1.png';
import img2 from './assets/screenshot2.png';
import img3 from './assets/screenshot3.png';
import img4 from './assets/screenshot4.png';
import img5 from './assets/screenshot5.png';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


export default function Works(){
    return(
        
        <div className='works'>
            <div className='workscard'>
                <div className='project-card'>
                    <a href='https://brandonawilliams1.github.io/weather-app/' target="_blank">API Weather App<img src={img3} alt='screenshot of Weather app' /></a>
                </div>
                <div className='project-card'>
                    <a href='https://brandonawilliams1.github.io/dynamicLandinPage/' target="_blank">Dynamic Landing Page<img src={img2} alt='dynamic landing page project' /></a>
                </div>
                <div className='project-card'>
                    <a href='https://remind-me-note-taker-app-387ed736a7df.herokuapp.com/' target="_blank">Note Taker<img src={img4} alt='screenshot of note taker app'></img></a>
                </div>
                <div className='project-card'>
                    <a href='https://github.com/coding-p2-g2/unpuffd' target="_blank">unPuffd<img src={img5} alt='screenshot of unpuffd app'></img></a>
                </div>
                <div className='project-card'>
                    <a href='https://drive.google.com/file/d/1x7p1W7zCbMN2ADKFpCutyG41OoOu05fZ/view?pli=1' target="_blank">E-Eommerce Backend App<img src={img1} alt='link to video of e-commerce backend app'></img></a>
                </div>
                
            </div>
            <div className='workscard-footer'>
                 <span><a href="https://github.com/brandonawilliams1/" target="_blank">Collab with Me on GitHub<FaGithubSquare /></a></span>
                 <span><a href="https://www.linkedin.com/in/brandonwilliams-software-engineer" target="_blank">Connect with Me on LinkedIn<FaLinkedin /></a></span>
                 <span><a href="https://twitter.com/technocraticaly" target="_blank">Follow Me on Twitter<FaTwitterSquare /></a></span>
            </div>
        </div> 
    )
}