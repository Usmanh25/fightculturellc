import React from 'react';
import '../../App.css';
import './contact.css';
// import Footer from '../footer';

function Contact() {
    return (
        <>
            {/* <h1 className='contact'>Join the Culture!</h1> */}

            <div className='contact-container'>
                <div className='contact-container1'>
            <h1 className='title-container'>Join the Culture!</h1>
                    <div className='contact-greeting'>
                        <h1>Start your training today,</h1>
                        <h1>dropins welcome or give us a call!</h1>
                    </div>

                    <div className='contact-info'>
                        <h1>(415)123-4567</h1>
                        <h1>fightculturellc@gmail.com</h1>
                        <h1>6137 Mission Street Daly City, CA 94014</h1>
                    </div>

                </div>
                <div className='contact-container2'>
                    <img src='/images/FightCultureLocation.png' alt='FC Map'></img>
                </div>
            </div>
        </>
    )
}

export default Contact;
