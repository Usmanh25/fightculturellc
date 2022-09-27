import React from 'react';
import Link from 'next/link'


function Cards() {
    return (
        <div>

            <div className='cards'>

                <h1 className='w-full animate-fadeIn text-5xl font-bungeeInline text-center bg-gradient-to-t from-white via-red-900 to-red-500 bg-clip-text text-transparent md:text-9xl pt-12 pb-12' id='blackoutline'>Fight <br></br><span className='bg-clip-text text-transparent bg-gradient-to-b from-stone-600 via-stone-600 to-black' id='blackoutline'>Culture</span></h1>

                <div className='card-container'>
                    <div className='card-wrapper'>

                        <ul className='card-item'>
                            <li className="card-item">
                                <Link href='/classes'>
                                    <a className="card-item-link">
                                        <figure className='card-item-pic-wrap' data-category='Our Classes'>
                                            <img 
                                                src='images/fcp-7.jpg'
                                                label='Our Classes'
                                                path='/classes'
                                                layout='fill' 
                                                alt="Nav-Card-Image" 
                                                className='card-item-img'
                                            />
                                        </figure>
                                        <p className='card-text'>Our Classes</p>

                                    </a>
                                </Link>
                            </li>
                            <li className="card-item">
                                <Link href='/instructors'>
                                    <a className="card-item-link">
                                        <figure className='card-item-pic-wrap' data-category='Our Instructors'>
                                            <img 
                                                src='images/FightCultureHomePage.png'
                                                label='Our Instructors'
                                                path='/instructors'
                                                layout='fill' 
                                                alt="Nav-Card-Image" 
                                                className='card-item-img'
                                            />
                                        </figure>
                                        <p className='card-text'>Our Instructors</p>

                                    </a>
                                </Link>
                            </li>
                        </ul>

                        <ul className='card-item'>
                            <li className="card-item">
                                <Link href='/schedule'>
                                    <a className="card-item-link">
                                        <figure className='card-item-pic-wrap' data-category='Weekly Schedule'>
                                            <img 
                                                src='images/FightCultureSchedule.jpg'
                                                label='Weekly Schedule'
                                                path='/schedule'
                                                layout='fill' 
                                                alt="Nav-Card-Image" 
                                                className='card-item-img'
                                            />
                                        </figure>
                                        <p className='card-text'>Weekly Schedule</p>
                                    </a>
                                </Link>
                            </li>
                            <li className="card-item">
                                <Link href='/schedule'>
                                    <a className="card-item-link">
                                        <figure className='card-item-pic-wrap' data-category='View Our Facility'>
                                            <img 
                                                src='images/fc_gallery_photo15.jpg'
                                                label='View Our Facility'
                                                path='/gallery'
                                                layout='fill' 
                                                alt="Nav-Card-Image" 
                                                className='card-item-img'
                                            />
                                        </figure>
                                        <p className='card-text'>View Our Facility</p>

                                    </a>
                                </Link>
                            </li>
                        </ul>

                        <ul className='card-item'>
                            <li className="card-item">
                                <Link href='/contact'>
                                    <a className="card-item-link">
                                        <figure className='card-item-pic-wrap' data-category='Get in Touch!'>
                                            <img 
                                                src='images/FightCultureLocation.png'
                                                label='Get in Touch!'
                                                path='/contact'
                                                layout='fill' 
                                                alt="Nav-Card-Image" 
                                                className='card-item-img'
                                            />
                                        </figure>
                                        <p className='card-text'>Get In Touch!</p>

                                    </a>
                                </Link>
                            </li>
                            <li className="card-item">
                                <a className="card-item-link" target='_blank' rel="noreferrer" href="https://www.instagram.com/fight_culturesf/">
                                    <figure className="card-item-pic-wrap" data-category="Follow Us!">
                                        <img src='images/iglogo.png' alt="Sample-Pic" className="card-item-img"/>
                                    </figure>
                                    <p className='card-text'>Follow Us!</p>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cards