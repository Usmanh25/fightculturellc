import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
// import '../styles/Cards.module.css'
// import '../styles/Classes.module.css'
// import '../styles/Contact.module.css'
// import '../styles/Footer.module.css'
// import '../styles/Gallery.module.css'
// import '../styles/HeroSection.module.css'
// import '../styles/Instructors.module.css'
// import '../styles/Navbar.module.css'
// import '../styles/Schedule.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="San Francisco SF Daly City DC Fight 
                    Culture Mixed Martial Arts MMA Training Fight Fighting Gym Muay Thai 
                    Brazilian JiuJitsu Jiu Jitsu Boxing Wrestling Grappling"/>
                <title>Fight Culture SF</title>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    ) 
}


export default App