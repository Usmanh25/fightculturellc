import React from 'react';
 
function Classes() {
        
    return (
        <div>
            <div className="bg-[url('/images/white-brick-wall.jpg')]">


                <h1 className='text-9xl text-center py-8 font-bold animate-fadeIn fill-transparent stroke-1 stroke-red-50' >Classes</h1>


                <div className='flex w-4/5 m-auto my-24 items-center justify-center pt-3.5 pb-12'>
                    <div className='w-5/10 text-black animate-fadeIn'>
                        <h1 className='text-7xl font-mochiyPopOne text-center font-bold fill-transparent'> MuayThai </h1>
                        <p className='text-center text-xl font-bold mt-5'>
                            Muay Thai, or Thai boxing, is a style of fighting which utilizes punches, 
                            kicks, elbows, and knees. A centuries old practice, we teach authentic Muay Thai and cover basic 
                            and advanced techniques. At Fight Culture, our 60-minute session covers all aspects of Muay Thai 
                            training including footwork, pad holding, striking, defense, and sparring. This is a moderate-to-high 
                            intensity workout.
                        </p>
                    </div>
                    <div className='ml-6'>
                        <img className='shadow-[0_5px_20px_red] w-5/10 rounded-xl float-right animate-fadeIn' src='images/fc_muaythai_3.jpg' alt='muaythai'></img>
                    </div>
                </div>


                <div className='flex w-4/5 m-auto my-24 items-center justify-center pt-3.5 pb-12'>
                    <div className='w-5/10 text-black animate-fadeIn'>
                        <h1 className='text-7xl font-mochiyPopOne text-center font-bold fill-transparent'> Brazilian Jiu-Jitsu </h1>
                        <p className='text-center text-xl font-bold mt-5'>
                            Brazilian Jiu-Jitsu, developed by the Gracie family during the early twentieth 
                            century, is a close-combat martial arts system which focuses on ground fighting 
                            and submission holding. Our 90-minute Brazilian Jiu-Jitsu classes begin with group stretches, 
                            followed by technique drilling, new concept & positioning instruction, and then live rolling. 
                        </p>

                    </div>
                    <div className='ml-6'>
                        <img className='shadow-[0_5px_20px_red] ml-6 w-5/10 rounded-xl float-right animate-fadeIn' src='images/fc_jiujitsu_3.jpg' alt='jiujitsu'></img>
                    </div>
                </div>


                <div className='flex w-4/5 m-auto my-24 items-center justify-center pt-3.5 pb-12'>
                    <div className='w-5/10 text-black animate-fadeIn'>
                        <h1 className='text-7xl font-mochiyPopOne text-center font-bold fill-transparent'> Wrestling </h1>
                        <p className='text-center text-xl font-bold mt-5'>
                            We offer a 60-minute Wrestling session on Fridays for those looking to sharpen their grappling skills. 
                            Much like Brazilian Jiu-Jitsu, this moderate-to-high intensity class begins with dynamic stretching,
                            follows up with technique teaching and drilling, and then ends with live wrestling.
                        </p>

                    </div>
                    <div className='ml-6'>
                        <img className='shadow-[0_5px_20px_red] ml-6 w-4/5 rounded-xl float-right animate-fadeIn' src='images/fc_wrestling.jpg' alt='jiujitsu'></img>
                    </div>
                </div>


                <div className='flex w-4/5 m-auto my-24 items-center justify-center pt-3.5 pb-12'>
                    <div className='w-5/10 text-black animate-fadeIn'>
                        <h1 className='text-7xl font-mochiyPopOne text-center font-bold fill-transparent'> Boxing </h1>
                        <p className='text-center text-xl font-bold mt-5'>
                            For fans of the sweet science, our newly added boxing class will provide you with one of 
                            the best cardiovascular workouts you've had! This session is 60 minutes long and 
                            will instill boxing fundamentals in your movement, defense, and striking. Much like 
                            Muay Thai, this class is great for conditioning, stress-relief, and self-defense! 
                        </p>
                    </div>
                    <div className='ml-6'>
                        <img className='shadow-[0_5px_20px_red] ml-6 w-5/10 rounded-xl float-right animate-fadeIn' src='images/fc_boxing.jpg' alt='boxing'></img>
                    </div>
                </div>                
            </div>
        </div>

    )
}

export default Classes;