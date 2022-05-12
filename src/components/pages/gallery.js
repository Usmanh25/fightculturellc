import React from 'react';
import '../../App.css';
import './gallery.css';

function Gallery() {
    return (
        <>
            <div className='gallery-container'>

                <div className='gallery-text'>
                    <h1 className='gallery'><span>Our Facility</span></h1>
                </div>

                <div className='gallery-image-container'>
                    <img alt='Gallery' src='images/FightCultureHomePage.png'></img>
                    <img alt='Gallery' src='images/FightCultureHomePagePic.png'></img>
                    <img alt='Gallery' src='images/FightCultureBlackLogo.png'></img>
                    <img alt='Gallery' src='images/Wrestling.png'></img>
                    <img alt='Gallery' src='images/JiuJitsu.png'></img>
                    <img alt='Gallery' src='images/MuayThai.png'></img>
                </div>  
            </div>
        </>
    )
}

export default Gallery