import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/FightCultureBlackLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="San Francisco SF Daly City DC Fight Culture Mixed Martial Arts MMA Training Fight Fighting Gym Muay Thai Brazilian JiuJitsu Jiu Jitsu Boxing Wrestling Grappling"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/FightCultureBlackLogo.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        crossorigin="anonymous"/>
        <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
        rel="stylesheet"
        />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Fight Culture SF</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}