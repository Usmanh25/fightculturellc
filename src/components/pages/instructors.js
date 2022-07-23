import React from 'react';
import '../../App.css';
import './instructors.css';



function Instructors() {
    return (
        <>
        {/* <h1 className='classes'>Our Services</h1> */}
        <div className='instructor-page-container'>

            <div className='classes-div'>

            <h1 className='instructors-title'>Our Instructors</h1>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/kyle.jpg' alt='muaythaifight'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Kyle Riddeau </h1>
                        <h2> Jiu-Jitsu </h2>
                        <h2> Muay Thai </h2>
                        <p>  
                            Kyle is a (number)th degree black belt under 
                            (name of guy) who has professionally 
                            fought (name of sport) for (number) years and has 
                            been teaching jiu jitsu for (number) years.(Fun fact)
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/jeremy.jpg' alt='boxingpic'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Jeremy ____</h1>
                    <h2> Muay Thai </h2>
                        <p>     
                            Jeremy is a former ______ muay thai fighter with over 
                            _____ fights of experience. He has been teaching 
                            muay thai for _______ years and _________________
                            (Fun fact)
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
                        <p>
                            Martin is a former SFSU
                            wrestler with (name of accolades/number
                            of matches/experience) (Fun fact)
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
                        <p>Brandy has been training boxing for 
                            _____ years and (more info about Brandy here) (Fun fact)
                        </p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ryan ____ </h1>
                        <h2> Jiu-Jitsu </h2>
                        <p>  
                            Ryan is a Brazilian Jiu-Jitsu brown belt under
                            (name of guy) who has (number of matches) and 
                            has been training for ___ years. (Fun fact)
                        </p>
                    </div>
                </div>
                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ali ____ </h1>
                        <h2> Jiu-Jitsu </h2>
                        <h2> Muay Thai </h2>
                        <p>  
                            Ali is a (number)th degree Black Belt in Brazilian Jiu-Jitsu under
                            (name of guy), who has also been training muay thai ___ years. 
                            (Fun fact)
                        </p>
                    </div>
                </div>
                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Wilson ____ </h1>
                        <h2> Jiu-Jitsu </h2>
                        <h2> Muay Thai </h2>
                        <p>  
                            Wilson has a Brown Belt in Brazilian Jiu-Jitsu under
                            (name of guy), as well as an experienced muay thai practitioner 
                            with over ___ years of experience.(Fun fact)
                        </p>
                    </div>
                </div>
                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/ProfilePicDefault.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Ron ____ </h1>
                        <h2> Muay Thai </h2>
                        <p>  
                            Ron is one of our beloved Muay Thai trainers who has been
                            competed and trained for over (number) years (Fun fact)
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>

    )
}

export default Instructors;