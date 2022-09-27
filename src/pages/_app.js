import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Mixed Martial Arts San Francisco SF 
                Daly City DC Fight Culture MMA Training Fight Fighting Gym Muay Thai 
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