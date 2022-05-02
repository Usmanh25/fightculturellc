import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import {Button} from './button'



function Navbar() {

    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav class='navbar'>
                <div class='navbar-container'>
                    <Link to='/' class='navbar-logo' onClick={closeMobileMenu}>
                        LOGO <i class='fab fa-typo3'></i>
                    </Link>
                    <div class='menu-icon' onClick={handleClick}>
                        <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul class={click ? 'nav-menu active' : 'nav-menu' }>
                        <li class='nav-item'>
                            <Link to='/' class='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/classes' class='nav-links' onClick={closeMobileMenu}>
                                Classes
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/signup' class='nav-links' onClick={closeMobileMenu}>
                                SignUp
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/instructors' class='nav-links' onClick={closeMobileMenu}>
                                Instructors
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/schedule' class='nav-links' onClick={closeMobileMenu}>
                                Schedule
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/gallery' class='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/contact' class='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>Sign UP</Button>}

                </div>
            </nav>
        </>
    )
}


export default Navbar