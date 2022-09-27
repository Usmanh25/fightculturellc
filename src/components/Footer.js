import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <div className="pt-16 pr-0 pb-8 pl-0 bg-[#242424] flex flex-col justify-center items-center">
                <section className="flex flex-col justify-center items-center text-center text-white mb-6 px-6 py-6 color-white">
                    <p className="mb-6 text-2xl">
                        About Us
                    </p>
                    <p className="mb-6 text-xl w-3/5">
                        Fight Culture is a 3 year-old 1000 square-foot martial arts training facility located in San Francisco's 
                        Outer Mission District at 6137 Mission Street. We teach a variety of martial arts classes suitable for 
                        all levels. Whether you are a beginner, a training fighter, or just looking to stay fit,
                        Fight Culture provides a friendly and welcoming environment to hone your skills and accomplish 
                        your fitness goals. 
                    </p>
                </section>
                <div className='pt-8 med:flex'>
                    <div className='flex'>
                        <div className='flex text-red-500 flex-col items-start m-4 box-border text-left w-40'>
                            <h2 className='underline mb-4 text-white text-2xl'>Services</h2>
                            <Link href='/classes'><a className='text-white mb-2 no-underline hover:text-red-500 duration-300 ease-out'>Classes</a></Link>
                            <Link href='/instructors'><a className='text-white mb-2 no-underline hover:text-red-500 duration-300 ease-out'>Instructors</a></Link>
                            <Link href='/schedule'><a className='text-white mb-2 no-underline hover:text-red-500 duration-300 ease-out'>Schedule</a></Link>
                        </div>

                        <div className='flex text-red-500 flex-col items-start m-4 box-border text-left w-40'>
                            <h2 className='underline mb-4 text-white text-2xl'>Pictures</h2>
                            <Link href='/gallery'>
                                <a className='text-white mb-2 no-underline hover:text-red-500 duration-300 ease-out'>
                                    Gallery
                                </a>
                            </Link>                        
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div className='flex text-red-500 flex-col items-start m-4 box-border text-left w-40'>
                            <h2 className='underline mb-4 text-white text-2xl'>Get in Touch!</h2>
                            <Link href='/contact'><a className='text-white mb-2 no-underline hover:text-red-500 duration-300 ease-out'>Contact</a></Link>
                        </div>

                        <div className='flex text-red-500 flex-col items-start m-4 box-border text-left w-40'>
                            <h2 className='underline mb-4 text-white text-2xl'>Follow Us!</h2>
                            <a 
                            className="text-white text-2xl hover:text-red-500"
                            href='https://www.instagram.com/fight_culturesf/' 
                            rel="noreferrer"
                            target='_blank'
                            aria-label='Instagram'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>                      
                        </div>
                    </div>
                </div>
                <section className="sm:flex-row md:flex max-w-5xl w-full">
                    <div className="sm:flex-row justify-between items-center w-11/12 max-w-5xl mx-auto mt-10 mb-0 md:justify-between flex flex-col">
                        <div className="items-center text-center">
                            <Link href='/' className="text-center text-white font-unifrakturCook justify-self-start ml-5 cursor-pointer flex items-center mb-4 no-underline text-3xl">
                                <a className='text-white font-unifrakturCook justify-self-start ml-3 cursor-pointer flex items-center mb-4 no-underline text-3xl hover:text-red-500 duration-300 ease-out'>
                                    Fight Culture
                                </a>
                            </Link>

                        </div>
                        <small className="mb-4 text-white text-sm"> UsmanHameed©2022</small>
                        <div className="flex justify-between items-center text-center w-60">
                            <img className='bg-black w-full h-full p-5 rounded-full'src='/images/FightCultureBlackLogo.png' alt='logo'/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Footer