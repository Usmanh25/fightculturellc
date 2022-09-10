import React from 'react';
import CardItem from './cardItem';
import './cards.css';



function Cards() {
    return (
        <div>

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
                            <li className="cards__item">
                                <a className="cards__item__link" target='_blank' rel="noreferrer" href='https://www.instagram.com/fight_culturesf/'>
                                    <figure className="cards__item__pic-wrap" data-category='Follow Us!'>
                                        <img src='images/iglogo.png' alt="Sample-Pic" className="cards__item__img"/>
                                    </figure>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Cards