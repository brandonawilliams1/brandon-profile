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
                <a href="https://www.linkedin.com/in/brandon-williams-kodewerk/">linkedin</a>
            </div>

            <div className="cart">
                <a href="https://unpuffd.herokuapp.com/">Group Project</a>
            </div>

            <div className="cart">
                <a href="https://github.com/brandonawilliams1/SQL-Employee-Tracker">SQL Employee Tracker CLI</a>
            </div>

            <div className="cart">
                <a href="https://github.com/brandonawilliams1/SQL-Employee-Tracker">SQL Employee Tracker CLI</a>
            </div>
            <div className="cart">
                <a href="https://github.com/EMJBB-Project-3">Full Stack MERN App</a>
            </div>
        </div>
    );
};

