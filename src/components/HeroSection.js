import React from "react";

function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                <video 
                    src='/videos/fc_grand_opening.mp4' 
                    autoPlay 
                    loop 
                    muted 
                    id="myVideo"
                    className='animate-fadeIn'
                ></video>
            </div>
        </div>
    )
}
export default HeroSection;
