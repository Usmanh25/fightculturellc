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
                        src='/images/MuayThai.jpg'
                        text='Sample text for classes'
                        label='Classes Label'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/underwater.jpg'
                        text='Sample text for instructors'
                        label='Instructors label'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample Text Schedule'
                        label='Schedule Label'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/CitySkyline.jpg'
                        text='Sample text for gallery'
                        label='Gallery Label'
                        path='/gallery'
                        />
                        <CardItem 
                        src='images/SFSkyline.jpg'
                        text='Sample text for contact'
                        label='Contact Label'
                        path='/contact'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Cards