import React from 'react';
import '../../App.css';
import './classes.css';


function Classes() {
    return (
        <>
        {/* <h1 className='classes'>Our Services</h1> */}
            <div className='classes-div'>

            <h1 className='classes-title'>Our Classes</h1>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/MuayThai.jpeg' alt='muaythaifight'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Muay Thai </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/Sample1.png' alt='boxingpic'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Boxing </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Exceteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/JiuJitsu.jpg' alt='jiujitsupic'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Jiu Jitsu </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/Wrestling.jpg' alt='wrestlingpic'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Wrestling </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Classes;