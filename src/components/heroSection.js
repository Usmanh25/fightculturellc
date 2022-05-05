import React from "react";
import '../App.css'
// import { Button } from "./button";
import './heroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/videoName.mp4' autoPlay loop muted/>
            <h1>FIGHT CULTURE HOMEPAGE</h1>
            <p> short description </p>
            {/* <div className='hero-btns'>
                
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                SIGN UP BUTTON
            </Button>

            <Button className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                watch trailer! <i className='far fa-play-circle'/>
            </Button>
            </div> */}
        </div>
    )
}

export default HeroSection;