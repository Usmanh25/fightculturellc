import React from 'react';

function Contact() {
    return (
        <div>
            <div className="bg-[url('/images/black_steel_wallpaper.jpg')]">

                <div className='contact-container1'>

                    <h1 className='text-white text-center text-7xl'>Join the Culture!</h1>

                    <div className='text-white text-center'>
                        <h1>Start your training today!</h1>
                        <h1>Drop-ins welcome or give us a call!</h1>
                    </div>

                    <div className='text-white text-center'>
                        <h1>(415)688-5800</h1>
                        <h1>fightculturesf@gmail.com</h1>
                        <h1>6137 Mission Street Daly City, CA 94014</h1>
                    </div>

                </div>


                <div className='animate-fadeIn'>
                    <img src='/images/FightCultureLocation.png' alt='FC Map'></img>
                </div>

                
            </div>
        </div>
    )
}

export default Contact;
