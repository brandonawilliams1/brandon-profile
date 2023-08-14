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
                    <a href='https://brandonawilliams1.github.io/weather-app/'>API Weather App<img src={img3} alt='screenshot of Weather app' /></a>
                </div>
                <div className='project-card'>
                    <a href='https://brandonawilliams1.github.io/dynamicLandinPage/'>Dynamic Landing Page<img src={img2} alt='dynamic landing page project' /></a>
                </div>
                <div className='project-card'>
                    <div>Note Taker</div>
                    <a href='https://github.com/brandonawilliams1/Note-Taker-App'>Note Taker<img src={img4} alt='screenshot of note taker app'></img></a>
                </div>
                <div className='project-card'>
                    <div>unPuffd</div>
                    <a href='https://github.com/coding-p2-g2/unpuffd'>unPuffd<img src={img5} alt='screenshot of unpuffd app'></img></a>
                </div>
                <div className='project-card'>
                    <a href='https://github.com/brandonawilliams1/Grand-Acres-E-Commerce-Backend-App'>E-Eommerce Backend App<img src={img1} alt='screenshot of e-commerce backend app'></img></a>
                </div>
                
            </div>
            <div className='workscard-footer'>
                 <span><a href="https://github.com/brandonawilliams1/">Collab with Me on GitHub<FaGithubSquare /></a></span>
                 <span><a href="https://www.linkedin.com/in/brandonwilliams-software-engineer">Connect with Me on LinkedIn<FaLinkedin /></a></span>
                 <span><a href="https://twitter.com/technocraticaly">Follow Me on Twitter<FaTwitterSquare /></a></span>
            </div>
        </div> 
    )
}