import React from 'react';
 
function Classes() {
        
    return (
        <div>
            <div className="flex flex-col animate-fadeIn bg-[url('/images/white-brick-wall.jpg')] pb-20">


                <h1 className='classes-title' >Classes</h1>


                <div className='md:flex'>
                    <div id='fadeInLeft' className='flex-col justify-center items-center m-auto md:w-6/12'>
                            <h1 className='text-6xl font-rubikDirt text-center md:text-6xl lg:text-8xl lg:py-3'> Muay <br></br>Thai </h1>
                            <div className='pb-5 pt-5 flex items-center justify-center'>
                                <img className='w-8/12 shadow-[0_5px_20px_red] rounded-xl' src='/images/fc_muaythai_3.jpg' alt='Muay Thai'></img>
                            </div>
                            <p className='w-screen px-12 pb-40 text-l font-medium text-center md:w-full md:py-3 md:px-20 lg:px-20 lg:pt-10 lg:text-xl font-bold'>
                            Muay Thai, or Thai boxing, is a style of fighting which utilizes punches, 
                                kicks, elbows, and knees. A centuries old practice, we teach authentic Muay Thai and cover basic 
                                and advanced techniques. At Fight Culture, our 60-minute session covers all aspects of Muay Thai 
                                training including footwork, pad holding, striking, defense, and sparring. This is a moderate-to-high 
                                intensity workout.
                            </p>
                    </div> 
                    <div id='fadeInRight' className='flex-col justify-center items-center m-auto md:w-6/12'>
                            <h1 className='text-6xl font-rubikDirt text-center md:text-6xl lg:text-8xl lg:py-3'> Brazilian <b></b> Jiu Jitsu </h1>
                            <div className='pb-5 pt-5 flex items-center justify-center'>
                                <img id='fadeInRight' className='w-8/12 shadow-[0_5px_20px_red] rounded-xl' src='/images/fc_jiujitsu_3.jpg' alt='Jiu Jitsu'></img>
                            </div>
                            <p className='w-screen px-12 pb-40 text-l font-medium text-center md:w-full md:py-3 md:px-20 lg:px-20 lg:pt-10 lg:text-xl font-bold'>
                            Brazilian Jiu-Jitsu, developed by the Gracie family during the early twentieth 
                            century, is a close-combat martial arts system which focuses on ground fighting 
                            and submission holding. Our 90-minute Brazilian Jiu-Jitsu classes begin with group stretches, 
                            followed by technique drilling, new concept & positioning instruction, and then live rolling.
                            </p>
                    </div> 
                </div>


                <div className='md:flex md:pt-40'>
                    <div className='flex-col justify-center items-center m-auto md:w-6/12'>
                            <h1 className='text-6xl font-rubikDirt text-center md:text-6xl lg:text-8xl lg:py-3'> Wrestling </h1>
                            <div className='pb-5 pt-5 flex items-center justify-center'>
                                <img id='fadeInRight' className='w-8/12 shadow-[0_5px_20px_red] rounded-xl' src='/images/fc_wrestling.jpg' alt='Wrestling'></img>
                            </div>
                            <p className='w-screen px-12 pb-40 text-l font-medium text-center md:w-full md:py-3 md:px-20 lg:px-20 lg:pt-10 lg:text-xl font-bold'>
                            We offer a 60-minute Wrestling session on Fridays for those looking to sharpen their grappling skills. 
                                Much like Brazilian Jiu-Jitsu, this moderate-to-high intensity class begins with dynamic stretching,
                                follows up with technique teaching and drilling, and then ends with live wrestling.
                            </p>
                    </div> 
                    <div className='flex-col justify-center items-center m-auto md:w-6/12'>
                            <h1 className='text-6xl font-rubikDirt text-center md:text-6xl lg:text-8xl lg:py-3'> Boxing </h1>
                            <div className='pb-5 pt-5 flex items-center justify-center'>
                                <img id='fadeInRight' className='w-8/12 shadow-[0_5px_20px_red] rounded-xl' src='/images/fc_boxing.jpg' alt='Boxing'></img>
                            </div>
                            <p className='w-screen px-12 pb-40 text-l font-medium text-center md:w-full md:py-3 md:px-20 lg:px-20 lg:pt-10 lg:text-xl font-bold'>
                            For fans of the sweet science, our newly added boxing class will provide you with one of 
                            the best cardiovascular workouts you've had! This session is 60 minutes long and 
                            will instill boxing fundamentals in your movement, defense, and striking. Much like 
                            Muay Thai, this class is great for conditioning, stress-relief, and self-defense!
                            </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Classes;