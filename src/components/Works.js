import './styles/Works.css';
import './styles/WorksCard.css'
import { FaGithubSquare } from 'react-icons/fa';

export default function Works(){
    return(
        <div className='works'>
            <div className='workscard'>
                 <p><a href="https://github.com/brandonawilliams1/">Follow Me on Git Hub<FaGithubSquare /></a></p>
            </div>
        </div> 
    )
}