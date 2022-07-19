import React from 'react';
import '../../App.css';
import './instructors.css';



function Instructors() {
    return (
        <>
        {/* <h1 className='classes'>Our Services</h1> */}
        <div className='instructor-page-container'>

            <div className='classes-div'>

            <h1 className='instructors-title'>Our Class Instructors</h1>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/kyle.jpg' alt='muaythaifight'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Kyle Riddeau </h1>
                    <h2> Jiu-Jitsu </h2>
                    <p>  Kyle is a (number)th degree black belt under 
                        (name of guy) who has professionally 
                        fought (name of sport) for (number) years and has 
                        been teaching jiu jitsu for (number) years.</p>

                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/jeremy.jpg' alt='boxingpic'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Jeremy _______</h1>
                    <h2> Muay Thai </h2>
                        <p>     

                            Jeremy is a former ______ muay thai fighter with over 
                            _____ fights of experience. He has been teaching 
                            muay thai for _______ years and _________________

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
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Brandy Cotter </h1>
                        <h2> Boxing </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ryan </h1>
                        <h2> Jiu-Jitsu </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>

    )
}

export default Instructors;