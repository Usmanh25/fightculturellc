import React from 'react';
import CardItem from './cardItem';
import './cards.css';


function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/MuayThai.png'
                        text='Martial Arts Classes'
                        label='Classes'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/FightCultureHomePage.png'
                        text='View Our Instructors'
                        label='Instructors'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/FightCultureSchedule.jpeg'
                        text='Weekly Schedule'
                        label='Schedule'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/fcp-2.jpg'
                        text='View Our Facility'
                        label='Gallery'
                        path='/gallery'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/samplephoto5.jpg'
                        text='Get in Touch'
                        label='Contact Us'
                        path='/contact'
                        />
                        <CardItem 
                        src='images/samplephoto5.jpg'
                        text='Get in Touch'
                        label='Instagram'
                        path='/contact'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Cards