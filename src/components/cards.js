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
                        text='Sample text'
                        label='Classes'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample text'
                        label='Instructors'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample text'
                        label='Schedule'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample text'
                        label='Gallery'
                        path='/gallery'
                        />
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample text'
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