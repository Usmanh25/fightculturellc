import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

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
                            <Link to='/classes'>Classes</Link>
                            <Link to='/instructors'>Instructors</Link>
                            <Link to='/schedule'>Schedule</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Get in Touch!</h2>
                            <Link to='/contact'>Contact</Link>

                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Pictures</h2>
                            <Link to='/gallery'>Gallery</Link>

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
                            {/* <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Twitter</Link>
                            <Link to='/'>Youtube</Link> */}
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to='/' className="social-logo">
                                Fight Culture
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