import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the culture!
                </p>
                <p className="footer-subscription-text">
                    Sign up today 
                </p>
                <div>
                    <form>
                        <input type='email' name='email' placeholder='your email' className='footer-input'/>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/classes'>How it works</Link>
                        <Link to='/'>testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>investors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>contact</Link>
                        <Link to='/'>support</Link>
                        <Link to='/'>Schedule</Link>
                        <Link to='/'>Contact</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Pictures</h2>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/'>submit</Link>
                        <Link to='/'>agency</Link>
                        <Link to='/'>ambassadors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Follow Us!</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer