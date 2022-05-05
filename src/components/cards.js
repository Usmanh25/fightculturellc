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
                        text='Sam'
                        label='labeltagggg'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='ample text helloooo 22222'
                        label='labeltagggg222'
                        path='/classes'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='ample text helloooo'
                        label='labeltagggg'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='ample text helloooo 22222'
                        label='labeltagggg222'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='ample text helloooo 22222'
                        label='labeltagggg222'
                        path='/classes'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Cards