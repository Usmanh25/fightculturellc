import React from 'react';
import CardItem from './cardItem';
import './cards.css';



function Cards() {
    return (
        <div className='cards'>
            <h1 className='fc-header'>Fight Culture</h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/fcp-7.jpg'
                        text='Our Classes'
                        label='Our Classes'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/FightCultureHomePage.png'
                        text='Our Instructors'
                        label='Our Instructors'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/FightCultureSchedule.jpg'
                        text='Weekly Schedule'
                        label='Weekly Schedule'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/fc_gallery_photo15.jpg'
                        text='View Our Facility'
                        label='View Our Facility'
                        path='/gallery'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/FightCultureLocation.png'
                        text='Get in Touch!'
                        label='Get in Touch!'
                        path='/contact'
                        />
                        <CardItem 
                        src='images/instagram.png'
                        text='Follow Us!'
                        label='Follow Us!'
                        path='https://www.instagram.com/fight_culturesf/'
                        />
                    </ul>


                        {/* <li className="cards__item">
                            <a className="cards__item__link2" target='_blank' rel="noreferrer" href='https://www.instagram.com/fight_culturesf/'>
                                <figure className="cards__item__pic-wrap-2" data-category='Follow Us!'>
                                    <img src='images/instagram.png' alt="Sample-Pic" className="cards__item__img2"/>
                                </figure>
                                <div className="cards__item__info">
                                </div>
                            </a>
                        </li> */}


                </div>
            </div>

        </div>
    )
}


export default Cards