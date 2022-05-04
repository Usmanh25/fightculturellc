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
                        <CardItem />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards