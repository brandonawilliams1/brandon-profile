import { CardTravelSharp, DriveEta } from '@material-ui/icons';
import './styles/Works.css';
import './styles/WorksCard.css';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Section from './Section';

export default function Works(){
    return(
        <div className='works'>
            <section class='workscard'>
                <div class='project-cards'>
                    <div><a target='_blank'_ href='https://github.com/brandonawilliams1/SQL-Employee-Tracker'>project1</a></div> 
                </div>
            </section>
            <div className='workscard'>
                 <span><a href="https://github.com/brandonawilliams1/">Collab with Me on GitHub<FaGithubSquare /></a></span>
                 <span><a href="https://www.linkedin.com/in/brandonwilliams-software-engineer">Connect with Me on LinkedIn<FaLinkedin /></a></span>
                 <span><a href="https://twitter.com/technocraticaly">Follow Me on Twitter<FaTwitterSquare /></a></span>
            </div>
        </div> 
    )
}