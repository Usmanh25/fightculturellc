import React from 'react';



function Instructors() {
    return (
        <div>
            <div className="bg-[url('/images/white-brick-wall.jpg')] pb-1">

                <h1 className='instructors-title'>Instructors</h1>

                <div className='sm:flex justify-center items-center place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/kyle.jpg' alt='Kyle'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl'> Kyle Rideau </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white mt-3.5 mb-1 text-red-500 lg:text-4xl'> Jiu Jitsu </h2>
                                <h3 className='text-s font-medium text-center text-black lg:text-xl'> Monday <span className='underline ml-3'>6:30pm</span> </h3>
                                <h3 className='text-s font-medium text-black text-center lg:text-xl'> Wednesday<span className='underline ml-3'>6:30pm</span></h3>
                                <h3 className='text-s font-medium text-black text-center lg:text-xl'> Thursday<span className='underline ml-3'>6:30pm</span></h3>
                                <h2 className='text-xl font-bungeeInline text-white mt-3.5 mb-1 text-red-500 lg:text-4xl'> Muay Thai </h2>
                                <h3 className='text-s font-medium text-black text-center lg:text-xl'> Thursday <span className='underline ml-3'>5:00pm</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                        Kyle is our head Jiu-Jitsu instructor and co-owner. He has over 20 years of experience 
                                training and competing in Muay Thai, Brazilian Jiu-Jitsu, and MMA.
                            A Brazilian Jiu-Jitsu black belt under UFC veteran Darren Uyenoyama via Ralph Gracie, 
                                Kyle teaches authentic Gracie Jiu-Jitsu technique and shares his Muay Thai 
                                knowledge on Thursdays.
                        </p>
                    </div>
                </div>
                <div className='sm:flex justify-center items-center place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/jeremy.jpg' alt='Jeremy'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl '> Jeremy Jacildo </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Muay Thai </h2>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Monday <span className='underline ml-3 text-center'>5:00pm</span> </h3>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Tuesday<span className='underline ml-3 text-center'>5:00pm</span></h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Jeremy is our Muay Thai specialist. 
                            He is a true technician that has been training and competing Muay Thai since 2005. 
                            Mondays and Tuesdays with Jeremy are guaranteed to bring the best out of you and 
                                vastly improve your skills and cardio!
                        </p>
                    </div>
                </div>

                <div className='sm:flex justify-center items-center  place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/martin.jpg' alt='Martin'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl'> Martin Ruiz </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Wrestling </h2>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Friday <span className='underline ml-3 text-center'>6:30pm</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Martin is an established NCAA wrestler with nearly 20 years of experience.
                            He is currently the head coach at Lowell High School.
                            His lifelong journey in competitive athletics has shifted to motivating and inspiring the 
                                youth through wrestling.                        
                        </p>
                    </div>
                </div>

                <div className='sm:flex justify-center items-center  place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/ron.jpg' alt='Ron'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl '> Ron Nitafan </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Muay Thai </h2>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Wednesday <span className='underline ml-3 text-center'>5:00pm</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Ron is one of our beloved Muay Thai instructors with over a decade
                                of training and instructing under his belt. 
                            Ron's Wednesday class emphasizes foundational Muay Thai concepts such as  
                                throwing strikes, assessing range, defense, and footwork.      
                        </p>
                    </div>
                </div>

                <div className='sm:flex justify-center items-center  place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/ryan.jpeg' alt='Ryan'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl '> Ryan Wellman </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Jiu-Jitsu </h2>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Tuesday <span className='underline ml-3 text-center text-center'>6:30pm</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Ryan is our Tuesday night Jiu-Jitsu instructor. 
                            His focus is to instill technically sound grappling fundamentals in all his pupils.
                            A Brazilian Jiu-Jitsu brown belt with extensive grappling experience, 
                                he loves competing and mentoring our young students.     
                        </p>
                    </div>
                </div>

                <div className='sm:flex justify-center items-center  place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/brandy.jpeg' alt='Brandy'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl '> Brandy Cotter </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Boxing </h2>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Friday <span className='underline ml-3 text-center'>8:00am</span> </h3>
                                <h3 className='text-s font-medium text-black lg:text-xl'> Saturday <span className='underline ml-3 text-center'>9:00am</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Brandy is our Friday and Saturday morning boxing instructor. 
                            She began her martial arts journey training Muay Thai with 
                                Urijah Faber and Team Alpha Male in the early 2000s.
                            She competed in Muay Thai and boxing, but has always loved coaching more.
                            Since then, she's taught boxing at gyms from Sacramento to the Bay Area, 
                                gaining over 15 years of experience.    
                        </p>
                    </div>
                </div>

                <div className='sm:flex justify-center items-center place-content-start m-auto my-24 pb-12 md:flex-row w-screen justify-between px-12'>
                    <div id='fadeInLeft' className='sm:w-full md:w-3/5 med:ml-12'>
                        <img className='my-12 shadow-[0_0_25px_red] rounded-xl animate-fadeIn' src='images/empty_picture.jpg' alt='Ritchie'></img>
                    </div>
                    <div id='fadeInRight' className='w-full text-center text-black animate-fadeIn md:w-3/4 px-4'>
                        <h1 className='text-4xl font-bungeeInline text-center lg:text-7xl'> Ritchie Mercado </h1>
                        <div className='flex justify-around'>
                            <div>
                                <h2 className='text-xl font-medium font-bungeeInline text-white my-3.5 text-red-500 lg:text-4xl'> Muay Thai </h2>
                                <h3 className='text-s font-medium text-center lg:text-xl'> Monday <span className='underline ml-3 text-center'>8:00am</span> </h3>
                                <h3 className='text-s font-medium text-center lg:text-xl'> Tuesday <span className='underline ml-3 text-center'>9:00am</span> </h3>
                                <h3 className='text-s font-medium text-center lg:text-xl'> Wednesday <span className='underline ml-3 text-center'>8:00am</span> </h3>
                                <h3 className='text-s font-medium text-center lg:text-xl'> Thursday <span className='underline ml-3 text-center'>9:00am</span> </h3>
                            </div>
                        </div>
                        <p className='text-l mt-5 backdrop-blur-lg md:w-1/2 m-auto lg:text-lg font-bold'>  
                            Ritchie is our co-owner and morning Muay Thai instructor.
                            A former fighter with vast striking and grappling knowledge, he has  
                                nearly 2 decades of experience training and competing Muay Thai
                                and Brazilian Jiu-Jitsu. 
                            He is a Brazilian Jiu-Jitsu brown belt.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructors;