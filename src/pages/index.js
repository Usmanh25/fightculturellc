import React from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';

function Home () {
    return (
        <div className='bg-black'>
            <HeroSection />
            <Cards/>
        </div>
    )
}

export default Home;