import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import netflixLogo from '../../netflix-logo.png';
import './Nav.css';

const Nav = () => {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" onClick={() => history.push('/')}/>
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" onClick={() => history.push('/profile')}/>
            </div>
        </div>
    )
}

export default Nav
