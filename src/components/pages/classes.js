import React from 'react';
import '../../App.css';
import './classes.css';

 
function Classes() {
        
    return (
        <>
        {/* <h1 className='classes'>Our Services</h1> */}
        <div className='class-page-container'>

            <div className='classes-div'>

            <h1 className='classes-title'>Martial Arts Classes</h1>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/MuayThai.png' alt='muaythaifight'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Muay Thai </h1>
                            <p>60 minute session covering aspects of Muay Thai 
                                from foowork, padwork, striking, and sparring</p>
                                {/* <br/>
                            <li> 15 min Wamup Dynamic Stretching / Shadowboxing </li>
                            <li> 20 min Cobiains </li>
                            <li> 20 minLiv Drlling </li>
                            <li> 10 min io / Cool Off </li>
                            <li> 10 min Cadio /Col Off </li> */}
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/Sample1.png' alt='boxingpic'></img>
                    </div>
                    <div className='class-text'>
                    <h1> Boxing </h1>
                        <p>60 minute session covering aspects of Boxing 
                            from foowork, padwork, striking, and sparring</p>
                        {/* <br/>
                        <li> 10 min Dynamic Stretching / Shadowboxing </li>
                        <li> 20 min Combinations </li>
                        <li> 20 min Live Drilling </li>
                        <li> 10 min Cardio / Cool Off </li> */}
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/JiuJitsu.png' alt='jiujitsupic'></img>
                    </div>
                    <div className='class-text'>
                        <h1> Jiu Jitsu </h1>
                        <p>90 minute class focusing on basic Brazilian 
                            Jiu-Jitsu moves, positioning, concepts, and live rolling</p>
                            {/* <br/>
                        <p>60 minute situational class focusing on 
                            drilling moves, advanced concepts, and live rolling</p>
                            <br/>
                        <li> 10 min Stretching </li>
                        <li> 20 min Drilling </li>
                        <li> 20 min Live Drilling </li>
                        <li> 10 min Cardio / Cool Off </li> */}
                    </div>
                </div>

                <div className='class-div'>
                    <div className='class-image'>
                        <img src='images/Wrestling.png' alt='wrestlers'></img>
                    </div>
                    <div className='class-text'>
                    <h1> Wrestling </h1>
                        <p>60 minute class focusing on Wresling stretching, 
                            moves, positioning, concepts, and live action</p>
                            {/* <br/>
                        <li> 10 min Stretching </li>
                        <li> 20 min Driling </li>
                        <li> 20 min Livrilling </li>
                        <li> 10 min Cardio / Cool Off </li> */}
                    </div>
                </div>
                
            </div>
        </div>
        </>

    )
}

export default Classes;