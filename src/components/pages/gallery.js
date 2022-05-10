import React from 'react';
import '../../App.css';
import './gallery.css';

function Gallery() {
    return (
        <>
            <div className='gallery-container'>

                <h1 className='gallery'>Our Facilities</h1>

                <div className='gallery-image-container'>
                    <img src='images/FightCultureHomePage.png'></img>
                    <img src='images/FightCultureHomePagePic.png'></img>
                    <img src='images/FightCultureBlackLogo.png'></img>
                    <img src='images/Wrestling.png'></img>
                    <img src='images/JiuJitsu.png'></img>
                    <img src='images/MuayThai.png'></img>
                </div>  
            </div>
        </>
    )
}

export default Gallery