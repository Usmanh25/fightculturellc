import React from 'react';
 
function Classes() {
        
    return (
        <div>
            <div className="bg-[url('/images/white-brick-wall.jpg')] pb-20">

                <h1 className='classes-title' >Classes</h1>

                <div className='sm:flex animate-fadeIn animate-fadeInLeft justify-center items-center m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id = 'fadeInLeft' className='sm:w-10/10 text-center text-black animate-fadeIn md:w-5/10'>
                        <h1 className='text-5xl font-rubikDirt text-center md:text-7xl'> Muay Thai </h1>
                        <p className='text-l mt-5 font-medium'>
                        Muay Thai, or Thai boxing, is a style of fighting which utilizes punches, 
                            kicks, elbows, and knees. A centuries old practice, we teach authentic Muay Thai and cover basic 
                            and advanced techniques. At Fight Culture, our 60-minute session covers all aspects of Muay Thai 
                            training including footwork, pad holding, striking, defense, and sparring. This is a moderate-to-high 
                            intensity workout.
                        </p>
                    </div>
                    <div className='md: ml-4'>
                        <img id='fadeInRight' className='my-12 shadow-[0_5px_20px_red] rounded-xl animate-fadeIn' src='images/fc_muaythai_3.jpg' alt='FCmuaythai'></img>
                    </div>
                </div>

                <div className='sm:flex animate-fadeIn justify-center items-center m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id = 'fadeInLeft' className='sm:w-10/10 text-center text-black animate-fadeIn md:w-5/10 '>
                        <h1 className='text-5xl font-rubikDirt text-center md:text-7xl'> Brazilian JiuJitsu </h1>
                        <p className='text-l mt-5 font-medium'>
                        Brazilian Jiu-Jitsu, developed by the Gracie family during the early twentieth 
                            century, is a close-combat martial arts system which focuses on ground fighting 
                            and submission holding. Our 90-minute Brazilian Jiu-Jitsu classes begin with group stretches, 
                            followed by technique drilling, new concept & positioning instruction, and then live rolling.
                        </p>
                    </div>
                    <div className='md: ml-4'>
                        <img id='fadeInRight' className='my-12 shadow-[0_5px_20px_red] rounded-xl animate-fadeIn' src='images/fc_jiujitsu_3.jpg' alt='FCjiujitsu'></img>
                    </div>
                </div>

                <div className='sm:flex animate-fadeIn justify-center items-center m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id = 'fadeInLeft' className='sm:w-10/10 text-center text-black animate-fadeIn md:w-5/10 '>
                        <h1 className='text-5xl font-rubikDirt text-center md:text-7xl'> Wrestling </h1>
                        <p className='text-l mt-5 font-medium'>
                        We offer a 60-minute Wrestling session on Fridays for those looking to sharpen their grappling skills. 
                            Much like Brazilian Jiu-Jitsu, this moderate-to-high intensity class begins with dynamic stretching,
                            follows up with technique teaching and drilling, and then ends with live wrestling.
                        </p>
                    </div>
                    <div className='md: ml-4'>
                        <img id='fadeInRight' className='my-12 shadow-[0_5px_20px_red] rounded-xl animate-fadeIn' src='images/fc_wrestling.jpg' alt='FCwrestling'></img>
                    </div>
                </div>

                <div className='sm:flex animate-fadeIn justify-center items-center m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id = 'fadeInLeft' className='sm:w-10/10 text-center text-black animate-fadeIn md:w-5/10 '>
                        <h1 className='text-5xl font-rubikDirt text-center md:text-7xl'> Boxing </h1>
                        <p className='text-l mt-5 font-medium'>
                        For fans of the sweet science, our newly added boxing class will provide you with one of 
                            the best cardiovascular workouts you've had! This session is 60 minutes long and 
                            will instill boxing fundamentals in your movement, defense, and striking. Much like 
                            Muay Thai, this class is great for conditioning, stress-relief, and self-defense! 
                        </p>
                    </div>
                    <div className='md: ml-4'>
                        <img id='fadeInRight' className='my-12 shadow-[0_5px_20px_red] rounded-xl animate-fadeIn' src='images/fc_boxing.jpg' alt='FCboxing'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classes;