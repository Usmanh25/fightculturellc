import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './navbar.css';


function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Fight Culture <img className='fclogo'src='/images/FightCultureBlackLogo.png' alt='pic'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/classes' className='nav-links' onClick={closeMobileMenu}>
                                Classes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/instructors' className='nav-links' onClick={closeMobileMenu}>
                                Instructors
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                                Schedule
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar