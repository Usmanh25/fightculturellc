import React from "react";
import '../App.css'
import './heroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <video src="public/videos/f_c_video.mp4" autoPlay loop muted/>
            <h1>Fight Culture SF</h1>
            <p> 6137 Mission Street</p>

        </div>
    )
}
export default HeroSection;
