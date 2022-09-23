import React from "react";
import {useState} from "react";
import Link from 'next/link'
import Image from 'next/image'
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
                <Image  
                    className='fclogo'
                    height='50px'
                    width='50px'green
                    src='/FightCultureBlackLogo.png' 
                    alt='Logo'
                />
            </div>


            {/* <div className='md:ml-auto'> */}
                <ul className={click ? 'fixed mt-96 mb-1 w-screen bg-[#242222]' : 'hidden med:flex items-right ml-auto justify-right pr-4'}>
                    
                    <li className='text-white py-4 text-center hover:bg-white mt-0 hover: duration-300 ease-out hover:text-[#242222] md:hover:text-red-500 hover:bg-black px-5 transition ease-in-out hover:scale-125'>
                        <Link href='/classes' className='cursor-pointer'>
                            <a onClick={closeMobileMenu}>
                                Classes
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white mt-0 hover: duration-300 ease-out hover:text-[#242222] md:hover:text-red-500 hover:bg-black px-5 transition ease-in-out hover:scale-125'>
                        <Link href='/instructors' className='cursor-pointer'>
                            <a onClick={closeMobileMenu}>
                                Instructors
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white mt-0 hover: duration-300 ease-out hover:text-[#242222] md:hover:text-red-500 hover:bg-black px-5 transition ease-in-out hover:scale-125'>
                        <Link href='/schedule' className='cursor-pointer'>
                            <a onClick={closeMobileMenu}>
                                Schedule
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white mt-0 hover: duration-300 ease-out hover:text-[#242222] md:hover:text-red-500 hover:bg-black px-5 transition ease-in-out hover:scale-125'>
                        <Link href='/gallery' className='cursor-pointer'>
                            <a onClick={closeMobileMenu}>
                                Gallery
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white mt-0 hover: duration-300 ease-out hover:text-[#242222] md:hover:text-red-500 hover:bg-black px-5 transition ease-in-out hover:scale-125'>
                        <Link href='/contact' className='cursor-pointer'>
                            <a onClick={closeMobileMenu}>
                                Contact Us
                            </a>
                        </Link>
                    </li>
                </ul>
            {/* </div> */}
                
            <div className='ml-auto cursor-pointer animate-fadeIn pr-8 med:hidden'>
                <FontAwesomeIcon icon={click ? faTimes : faBars} onClick={handleClick} className='text-white float-right lg:hidden'/>
            </div>
                
       </nav>
    )
}


export default Navbar

