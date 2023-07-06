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
                <div className='project-cards1'>
                    <a href='https://github.com/brandonawilliams1/SQL-Employee-Tracker'><img src={img3} alt='screenshot of employee tracker project app' />SQL-Employee-Tracker</a>
                </div>
                <div className='projects-cards2'>
                    <a href='https://github.com/brandonawilliams1/dynamicLandinPage'><img src={img2} alt='dynamic landing page project' />Dynamic Landing Page</a>
                </div>
                <div className='projects-card3'>
                    <a href='https://github.com/brandonawilliams1/Note-Taker-App'><img src={img4} alt='screenshot of note taker app'></img>Note Taker App</a>
                </div>
                <div className='projects-card4'>
                    <a href='https://github.com/coding-p2-g2/unpuffd'><img src={img5} alt='screenshot of unpuffd app'></img>unPuffd</a>
                </div>
                <div className='projects-card4'>
                    <a href='https://github.com/brandonawilliams1/Grand-Acres-E-Commerce-Backend-App'><img src={img1} alt='screenshot of e-commerce backend app'></img>E-Eommerce Backend App</a>
                </div>
                
            </div>
            <div className='workscard'>
                 <span><a href="https://github.com/brandonawilliams1/">Collab with Me on GitHub<FaGithubSquare /></a></span>
                 <span><a href="https://www.linkedin.com/in/brandonwilliams-software-engineer">Connect with Me on LinkedIn<FaLinkedin /></a></span>
                 <span><a href="https://twitter.com/technocraticaly">Follow Me on Twitter<FaTwitterSquare /></a></span>
            </div>
        </div> 
    )
}