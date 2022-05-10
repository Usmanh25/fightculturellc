import React from 'react';
import '../../App.css';
import './instructors.css';



function Instructors() {
    return (
        <>
        {/* <h1 className='classes'>Our Services</h1> */}
        <div className='instructor-page-container'>

            <div className='classes-div'>

            <h1 className='instructors-title'>Our lnstructors</h1>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/MuayThai.png' alt='muaythaifight'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Instructor Name </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>

                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/Sample1.png' alt='boxingpic'></img>
                    </div>
                    <div className='instructor-text'>
                    <h1> Instructor Name </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/JiuJitsu.png' alt='jiujitsupic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Instructor Name </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='instructor-div'>
                    <div className='instructor-image'>
                        <img src='images/Wrestling.png' alt='wrestlingpic'></img>
                    </div>
                    <div className='instructor-text'>
                        <h1> Instructor Name </h1>
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