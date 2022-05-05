import React from 'react';
import CardItem from './cardItem';
import './cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Our Services</h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/Sample1.png'
                        text='Martial Arts Classes'
                        label='Classes'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/samplephoto2.jpg'
                        text='View Our Instructors'
                        label='Instructors'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/samplephoto3.jpg'
                        text='Weekly Schedule'
                        label='Schedule'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/samplephoto4.jpg'
                        text='View Our Facility'
                        label='Gallery'
                        path='/gallery'
                        />
                        <CardItem 
                        src='images/samplephoto5.jpg'
                        text='Get in Touch'
                        label='Contact Us'
                        path='/contact'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Cards