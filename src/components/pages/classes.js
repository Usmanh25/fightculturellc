import React from 'react';
import '../../App.css';
import './classes.css';

 
function Classes() {
        
    return (
        <>
            <div className='class-page-container'>

                <h1 className='classes-title'>Classes</h1>

                <div className='class-div'>
                    <div className='class-text'>
                        <h1> MuayThai </h1>
                        <p>
                            Muay Thai, or Thai boxing, is a style of fighting which utilizes punches, 
                            kicks, elbows, and knees. A centuries old practice, we teach authentic Muay Thai and cover basic 
                            and advanced techniques. At Fight Culture, our 60 minute session covers all aspects of Muay Thai 
                            training including footwork, pad holding, striking, defense, and sparring. This is a moderate-to-high 
                            intensity workout.
                        </p>
                    </div>
                    <div className='class-image'>
                        <img src='images/fc_muaythai_3.jpg' alt='muaythai'></img>
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-text'>
                        <h1> Brazilian Jiu-Jitsu </h1>
                        <p>
                            Brazilian Jiu-Jitsu, developed by the Gracie family during the early twentieth 
                            century, is a close-combat martial arts system which focuses on ground fighting 
                            and submission holding. Our 90 minute Brazilian Jiu-Jitsu classes begin with group stretches, 
                            followed by technique drilling, new concept & positioning instruction, and then live rolling. 
                        </p>

                    </div>
                    <div className='class-image'>
                        <img src='images/fc_jiujitsu_3.jpg' alt='jiujitsu'></img>
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-text'>
                        <h1> Wrestling </h1>
                        <p>
                            We offer a 60 minute Wrestling session on Fridays for those looking to sharpen their grappling skills. 
                            Much like Brazilian Jiu-Jitsu, this moderate-to-high intensity class begins with dynamic stretching,
                            follows up with technique teaching and drilling, and then ends with live wrestling. 
                        </p>

                    </div>
                    <div className='class-image'>
                        <img src='images/fc_wrestling.jpg' alt='wrestling'></img>
                    </div>
                </div>

                <div className='class-div2'>
                    <div className='class-text2'>
                        <h1> Boxing </h1>
                        <p>
                            For fans of the sweet science, our newly added boxing class will provide you with one of 
                            the best cardiovascular workouts you've had! This session is 60 minutes long and 
                            will instill boxing fundamentals in your movement, defense, and striking. Much like 
                            Muay Thai, this class is great for conditioning, stress-relief, and self-defense! 
                        </p>
                    </div>
                    <div className='class-image2'>
                        <img src='images/fc_boxing.jpg' alt='boxing'></img>
                    </div>
                </div>                
            </div>
        </>

    )
}

export default Classes;