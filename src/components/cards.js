import React from 'react';
import CardItem from './cardItem';
import './cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1> check out this stuff</h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Sample text for classes'
                        label='Classes Label'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Sample text for instructors'
                        label='Instructors label'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Sample Text Schedule'
                        label='Schedule Label'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Sample text for gallery'
                        label='Gallery Label'
                        path='/gallery'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Sample text for contact'
                        label='COntact Label'
                        path='/contact'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Cards