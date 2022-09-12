import React from "react";
import {useState} from "react";
import Link from 'next/link'


function Navbar() {

    
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>    
            <nav className='navbar'>
                <div className='navbar-container'>

                    <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <a>
                            Fight Culture <img className='fclogo'src='/images/FightCultureBlackLogo.png' alt='pic'/>
                        </a>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link href='/classes' className='nav-links' onClick={closeMobileMenu}>
                                <a>
                                    Classes
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/instructors' className='nav-links' onClick={closeMobileMenu}>
                                <a>
                                    Instructors
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/schedule' className='nav-links' onClick={closeMobileMenu}>
                                <a>
                                    Schedule
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                <a>
                                    Gallery
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/contact' className='nav-links' onClick={closeMobileMenu}>
                                <a>
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}


export default Navbar