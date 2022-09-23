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
                    <a onClick={closeMobileMenu} className='text-white font-unifrakturCook animate-fadeIn text-3xl text-white mr-5 ml-5 hover:text-red-500'>
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


            <div className='fixed'>
                {/* <ul className={click ? 'animate-fadeIn' : 'hidden bg-green-500 opacity-100 z-10 transition-all duration-500 ease-in md:flex justify-around text-white'}> */}
                <ul className={click ? 'animate-fadeIn mt-10 absolute w-screen bg-[#242222] flex-col transition-all duration-500 ease-in' : 'hidden bg-green-500 opacity-100 z-10 transition-all duration-500 ease-in md:flex justify-around text-white'}>
                    
                    <li className='text-white py-4 text-center hover:bg-white hover:text-[#242222]'>
                        <Link href='/classes' className=''>
                            <a onClick={closeMobileMenu}>
                                Classes
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white hover:text-[#242222]'>
                        <Link href='/instructors' className=''>
                            <a onClick={closeMobileMenu}>
                                Instructors
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white hover:text-[#242222]'>
                        <Link href='/schedule' className=''>
                            <a onClick={closeMobileMenu}>
                                Schedule
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white hover:text-[#242222]'>
                        <Link href='/gallery' className=''>
                            <a onClick={closeMobileMenu}>
                                Gallery
                            </a>
                        </Link>
                    </li>

                    <li className='text-white py-4 text-center hover:bg-white hover:text-[#242222]'>
                        <Link href='/contact' className=''>
                            <a onClick={closeMobileMenu}>
                                Contact Us
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
                
            <div className='ml-auto animate-fadeIn pr-4 float-right md:hidden'>
                <FontAwesomeIcon icon={click ? faTimes : faBars} onClick={handleClick} className='text-white float-right md:hidden'/>
            </div>
                
       </nav>
    )
}


export default Navbar

