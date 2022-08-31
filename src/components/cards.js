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
                        label='Our Classes'
                        path='/classes'
                        />
                        <CardItem 
                        src='images/FightCultureHomePage.png'
                        label='Our Instructors'
                        path='/instructors'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/FightCultureSchedule.jpg'
                        label='Weekly Schedule'
                        path='/schedule'
                        />
                        <CardItem 
                        src='images/fc_gallery_photo15.jpg'
                        label='View Our Facility'
                        path='/gallery'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem 
                        src='images/FightCultureLocation.png'
                        label='Get in Touch!'
                        path='/contact'
                        />
                        <CardItem 
                        src='images/iglogo.png'
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