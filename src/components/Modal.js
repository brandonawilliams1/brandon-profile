// import { NavLink } from 'react-router-dom';
import './styles/Modal.css'
import { Close } from '@material-ui/icons';

export default function Modal({ showModal }) {
    return (
        <div className='modal'>

            <div className="close-modal">
                <Close className='cm' onClick={showModal} />
            </div>

            <div className="cart">
                <a href="https://www.linkedin.com/in/brandonwilliams-software-engineer/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </div>

            <div className="cart">
                <a href="https://github.com/settings/organizations" target="_blank" rel="noopener noreferrer">Project Contributions</a>
            </div>

            <div className="cart">
                <a href="https://github.com/brandonawilliams1/SQL-Employee-Tracker" target="_blank" rel="noopener noreferrer">SQL Employee Tracker CLI</a>
            </div>

            <div className="cart">
                <a href="https://github.com/brandonawilliams1/Grand-Acres-E-Commerce-Backend-App" target="_blank" rel="noopener noreferrer">E-Commerce Backend Application</a>
            </div>
            <div className="cart">
                <a href="https://github.com/EMJBB-Project-3" target="_blank" rel="noopener noreferrer">Full Stack MERN App</a>
            </div>
        </div>
    );
};

