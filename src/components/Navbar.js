import React from "react";
import {useState} from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

    
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <nav className='bg-black w-screen h-20 fixed z-50 text-xl flex justfy-center items-center'>

            <div>
                <Link href='/' className='flex items-center justify-center'>
                    <a onClick={closeMobileMenu} className='text-white font-unifrakturCook animate-fadeIn text-3xl text-white mr-5 ml-5 hover:text-red-500 duration-300 ease-out'>
                        Fight Culture 
                    </a>
                </Link>
            </div>

            <div className='flex items-center justify-center animate-fadeIn'>
                <img className='h-16 w-16' src='/images/FightCultureBlackLogo.png'alt='Logo'/>
            </div>

            <ul id='fadeInLeftFast' className={click ? 'fixed animate-fadeInFast mt-96 mb-1 w-screen bg-[#242222]' : 'hidden med:flex items-right ml-auto justify-right pr-4'}>
                
                <li className='hover:scale-125 hover:transition ease-in-out hover:duration-300 ease-out text-white py-4 text-center hover:bg-white mt-0 hover:text-[#242222] px-5 md:hover:bg-white med:hover:bg-black med:hover:text-red-500'>
                    <Link href='/classes' className=''>
                        <a className='sm:py-4 px-24 md:px-72 med:px-0 med:py-0' onClick={closeMobileMenu}>
                            Classes
                        </a>
                    </Link>
                </li>

                <li className='hover:scale-125 hover:transition ease-in-out hover:duration-300 ease-out text-white py-4 text-center hover:bg-white mt-0 hover:text-[#242222] px-5 md:hover:bg-white med:hover:bg-black med:hover:text-red-500'>
                    <Link href='/instructors' className='cursor-pointer'>
                        <a className='sm:py-4 px-24 md:px-72 med:px-0 med:py-0' onClick={closeMobileMenu}>
                            Instructors
                        </a>
                    </Link>
                </li>

                <li className='hover:scale-125 hover:transition ease-in-out hover:duration-300 ease-out text-white py-4 text-center hover:bg-white mt-0 hover:text-[#242222] px-5 md:hover:bg-white med:hover:bg-black med:hover:text-red-500'>
                    <Link href='/schedule' className='cursor-pointer'>
                        <a className='sm:py-4 px-24 md:px-72 med:px-0 med:py-0' onClick={closeMobileMenu}>
                            Schedule
                        </a>
                    </Link>
                </li>

                <li className='hover:scale-125 hover:transition ease-in-out hover:duration-300 ease-out text-white py-4 text-center hover:bg-white mt-0 hover:text-[#242222] px-5 md:hover:bg-white med:hover:bg-black med:hover:text-red-500'>
                    <Link href='/gallery' className='cursor-pointer'>
                        <a className='sm:py-4 px-24 md:px-72 med:px-0 med:py-0' onClick={closeMobileMenu}>
                            Gallery
                        </a>
                    </Link>
                </li>

                <li className='hover:scale-125 hover:transition ease-in-out hover:duration-300 ease-out text-white py-4 text-center hover:bg-white mt-0 hover:text-[#242222] px-5 md:hover:bg-white med:hover:bg-black med:hover:text-red-500'>
                    <Link href='/contact' className='cursor-pointer'>
                        <a className='sm:py-4 px-24 md:px-72 med:px-0 med:py-0' onClick={closeMobileMenu}>
                            Contact Us
                        </a>
                    </Link>
                </li>
            </ul>
                
            <div className='ml-auto cursor-pointer animate-fadeIn pr-8 med:hidden'>
                <FontAwesomeIcon icon={click ? faTimes : faBars} onClick={handleClick} className='bg-black text-white float-right lg:hidden'/>
            </div>  
       </nav>
    )
}


export default Navbar

