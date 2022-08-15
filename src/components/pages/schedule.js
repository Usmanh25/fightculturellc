import React from 'react';
import '../../App.css';
import './schedule.css';
// import CardItem from '../cardItem';


function Schedule() {
    return(
        <>
            <div className='schedule-container'>
                <div className='schedule-image-container'>
                    {/* <h1 className='schedule'>Weekly Class Schedule</h1> */}
                    {/* <CardItem 
                                src='images/FightCultureSchedule.jpeg'
                                text='Martial Arts Classes'
                                label='Classes'
                                path='/classes'
                                /> */}
                    <img src='images/FightCultureSchedule.jpeg'></img>
                </div>
            </div>
        </>
    )
}

export default Schedule;