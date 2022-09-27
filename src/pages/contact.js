import React from 'react';

function Contact() {
    return (
        <div>
            <div className="animate-fadeIn pb-20 pt-40 bg-[url('/images/black-brick-wall.jpg')]">
                <h1 className='animate-fadeIn text-7xl py-5 text-white font-bungeeInline text-center md:text-9xl'>Join the <br></br>Culture!</h1>

                <div className='py-10 text-3xl text-white text-center gap-10 animate-fadeIn md:text-7xl'>
                    <h1 className='py-2 font-rubikDirt md:py-5'>Start your<br></br> training today!</h1>
                    <h1 className='py-2 font-rubikDirt md:py-5'>Drop-ins welcome <br></br>or give us a call!</h1>
                </div>

                <div className='animate-fadeIn pb-6 md:pb-10'>
                    <h1 className='font-medium text-center text-white text-xl md:text-3xl py-1'>415-688-5800</h1>
                    <h1 className='font-medium text-center text-white text-xl md:text-3xl py-1'>fightculturesf@gmail.com</h1>
                    <h1 className='font-medium text-center text-white text-xl md:text-3xl py-1'>6137 Mission Street Daly City, CA 94014</h1>
                </div>

                <div className='flex items-center justify-center rounded-xl animate-fadeIn'>
                    <img className='w-4/5 h-4/5 shadow-[0_0_30px_white] rounded-xl hover:shadow-[0_0_60px_white] duration-300 ease-out'src='/images/FightCultureLocation.png' alt='FC Map'></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;
