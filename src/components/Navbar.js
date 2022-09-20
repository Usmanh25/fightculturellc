import React from "react";
import {useState} from "react";
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {

    
    const click = useState(false)
    
    const setClick = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>

                <Link href='/' className='navbar-logo'>
                    <a onClick={closeMobileMenu}>
                        Fight Culture 
                        <div style={{position: 'relative'}}>
                            <Image  
                                className='fclogo'
                                height='50px'
                                width='50px'
                                src='/FightCultureBlackLogo.png' 
                                alt='Logo'
                            />
                        </div>
                    </a>
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item'>
                        <Link href='/classes' className='nav-links'>
                            <a onClick={closeMobileMenu}>
                                Classes
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/instructors' className='nav-links'>
                            <a onClick={closeMobileMenu}>
                                Instructors
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/schedule' className='nav-links'>
                            <a onClick={closeMobileMenu}>
                                Schedule
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/gallery' className='nav-links'>
                            <a onClick={closeMobileMenu}>
                                Gallery
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/contact' className='nav-links'>
                            <a onClick={closeMobileMenu}>
                                Contact Us
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Navbar

