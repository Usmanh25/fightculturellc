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
                            Kyle is our head Jiu-Jitsu trainer and co-owner. With over 20 years of training, 
                            coaching, and competetive experience in  he has seen it all and loves sharing his knowledge. (fun fact)
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
                            he has been training muay thai since 2006. He likes long 
                            walks on the beach and fruity alchoholic beverages.
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
                            Currently the Head Coach at Lowell High School, his competetive 
                            athletics journey has shifted to motivating and inspiring the youth
                            through wrestling.
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
                            Ritchie is our morning Muay Thai trainer and co-owner.
                            instructor. He has been training and competing Muay Thai 
                            for _____ years. A versatile and skilled martial artist, 
                            he also has a brown belt in Brazilian Jiu-Jitsu. 
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
                            motorcycle road racer, he now fills his spare time with a Latin dance team
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
                            Ryan is a Brazilian Jiu-Jitsu brown belt under
                            ____ who has _____ matches of experience and 
                            has been training for ___ years. (Fun fact)
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
                        <p>Brandy is our boxing trainer. She has been training boxing for 
                            _____ years and (more info about Brandy here) (Fun fact)
                        </p>
                    </div>
                </div>
                    
            </div>
        </>

    )
}

export default Instructors;