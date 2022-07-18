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
                    <img alt='Gallery' src='images/fcp-1.jpg'></img>
                    <img alt='Gallery' src='images/fcp-2.jpg'></img>
                    <img alt='Gallery' src='images/fcp-3.jpg'></img>
                    <img alt='Gallery' src='images/fcp-4.jpg'></img>
                    <img alt='Gallery' src='images/fcp-5.jpg'></img>
                    <img alt='Gallery' src='images/fcp-6.jpg'></img>
                    <img alt='Gallery' src='images/fcp-7.jpg'></img>
                </div>  
            </div>
        </>
    )
}

export default Gallery