import React from "react";
import Link from 'next/link'

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        About Us
                    </p>
                    <p className="footer-subscription-text">
                        Fight Culture is a 3 year-old 1000 square-foot martial arts training facility located in San Francisco's 
                        Outer Mission District at 6137 Mission Street. We teach a variety of martial arts classes suitable for 
                        all levels. Whether you are a beginner, a training fighter, or just looking to stay fit,
                        Fight Culture provides a friendly and welcoming environment to hone your skills and accomplish 
                        your fitness goals. 
                    </p>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Services</h2>
                            <Link href='/classes'><a>Classes</a></Link>
                            <Link href='/instructors'><a>Instructors</a></Link>
                            <Link href='/schedule'><a>Schedule</a></Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Get in Touch!</h2>
                            <Link href='/contact'><a>Contact</a></Link>

                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Pictures</h2>
                            <Link href='/gallery'><a>Gallery</a></Link>

                        </div>
                        <div className='footer-link-items'>
                            <h2>Follow Us!</h2>
                            <a 
                            className="social-icon-link instagram"
                            href='https://www.instagram.com/fight_culturesf/' 
                            rel="noreferrer"
                            target='_blank'
                            aria-label='Instagram'>
                                <i className='fab fa-instagram'/>
                            </a>
                            {/* <Link href='/'>Instagram</Link>
                            <Link href='/'>Facebook</Link>
                            <Link href='/'>Twitter</Link>
                            <Link href='/'>Youtube</Link> */}
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link href='/' className="social-logo">
                                <a>
                                    Fight Culture
                                </a>
                            </Link>
                            {/* // */}

                        </div>
                        <small className="website-rights"> UsmanHameed©2022</small>
                        <div className="social-icons">
                            <img className='fclogo'src='/images/FightCultureBlackLogo.png' alt='pic'/>
                            {/* <Link 
                            className="social-icon-link facebook"
                            to='/' 
                            target='_blank'
                            aria-label='Facebook'>
                                <i className='fab fa-facebook-f'/>
                            </Link>
                            <Link 
                            className="social-icon-link instagram"
                            to='/' 
                            target='_blank'
                            aria-label='Instagram'>
                                <i className='fab fa-instagram'/>
                            </Link>
                            <Link 
                            className="social-icon-link youtube"
                            to='/' 
                            target='_blank'
                            aria-label='Youtube'>
                                <i className='fab fa-youtube'/>
                            </Link>
                            <Link 
                            className="social-icon-link twitter"
                            to='/' 
                            target='_blank'
                            aria-label='Twitter'>
                                <i className='fab fa-twitter'/>
                            </Link>
                            <Link 
                            className="social-icon-link linkedin"
                            to='/' 
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'/>
                            </Link> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Footer