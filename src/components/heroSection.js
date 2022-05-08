import React from "react";
import '../App.css'
import './heroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <img id='image' src='/images/FightCultureHomePagePic.png' alt='Hero Section'></img>
            <h1>Fight Culture <br/> Combat Systems</h1>
            <p> Daly City, California </p>

        </div>
    )
}

export default HeroSection;