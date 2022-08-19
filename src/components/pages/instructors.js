import React from 'react';
import '../../App.css';
import './instructors.css';



function Instructors() {
    return (
        <>
            <div className='instructor-page-container'>

                <h1 className='instructors-title'>Instructors</h1>

                <div className='instructor-div'>
                    <div className='instructor-image-kyle'>
                        <img src='images/kyle.jpg' alt='muaythaifight'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Kyle Riddeau </h1>
                        <h2> Jiu-Jitsu </h2>
                        <h3> Monday 6:30pm </h3>
                        <h3> Wednesday 6:30pm</h3>
                        <h3> Thursday 6:30pm</h3>
                        <h2> Muay Thai </h2>
                        <h3> Thursday 5:00pm</h3>
                        <p>  
                            Kyle is our head Jiu-Jitsu trainer and co-owner. He has over 20 years of  
                            experience training and competing in Muay Thai, Brazilian Jiu-Jitsu, and MMA.
                            A Brazilian Jiu-Jitsu black belt under UFC veteran Darren Uyenoyama via Ralph 
                            Gracie, Kyle teaches authentic Gracie Jiu-Jitsu technique and shares
                            his Muay Thai knowledge on Thursdays.
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='jiujitsupic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ritchie Mercado </h1>
                        <h2> Muay Thai </h2>
                        <h3> Monday 8:00am</h3>
                        <h3> Tuesday 9:00am</h3>
                        <h3> Wednesday 8:00am</h3>
                        <h3> Thursday 9:00am</h3>
                        <p>
                            Ritchie is our co-owner and morning Muay Thai trainer.
                            A former fighter with vast striking and grappling knowledge, he has over 
                            15 years of experience training and competing Muay Thai and Jiu Jitsu. 
                            He is a Brazilian Jiu-Jitsu Brown Belt.
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/jeremy.jpg' alt='boxingpic'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Jeremy Jacildo</h1>
                    <h2> Muay Thai </h2>
                    <h3> Monday 5:00pm</h3>
                    <h3> Tuesday 5:00pm</h3>
                        <p>     
                            Jeremy is our Muay Thai specialist. A former professional,
                            he has been training Muay Thai since 2006. He likes long 
                            walks on the beach and fruity alcoholic beverages.
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/martin.jpg' alt='jiujitsupic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Martin Ruiz </h1>
                        <h2> Wrestling </h2>
                        <h3> Friday 6:30pm</h3>
                        <p>
                            Martin is an decorated NCAA Wrestler with 17 years of experience.
                            Currently the Head Coach at Lowell High School, his competitive 
                            athletics journey has shifted to motivating and inspiring the youth
                            through wrestling.
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ron.jpg' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ron Nitafan </h1>
                        <h2> Muay Thai </h2>
                        <h3> Wednesday 5:00pm</h3>
                        <p>  
                            Ron is one of our beloved Muay Thai trainers with over 10 years
                            of training, competing, and instructing under his belt. A retired 
                            motorcycle road racer, he now fills his spare time with a Latin dance team.
                        </p>
                    </div>
                </div>
            
                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ryan Wellman </h1>
                        <h2> Jiu-Jitsu </h2>
                        <h3> Tuesday 6:30pm</h3>
                        <p>  
                            Ryan is our Tuesday night Jiu-Jitsu coach. A Brazilian Jiu-Jitsu brown belt with
                            extensive grappling experience, he loves competing and mentoring our young 
                            students.
                        </p>
                    </div>
                </div>
                
                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Brandy Cotter </h1>
                        <h2> Boxing </h2>
                        <h3> Friday 8:00am</h3>
                        <h3> Saturday 9:00am</h3>
                        <p> 
                            Brandy is our Friday and Saturday morning boxing trainer. She has been training 
                            boxing for over a decade and (more info about Brandy here) (Fun fact)
                        </p>
                    </div>
                </div>
                    
            </div>
        </>

    )
}

export default Instructors;