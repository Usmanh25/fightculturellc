import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/FightCultureBlackLogo.png" />
          <link rel="apple-touch-icon" href="/FightCultureBlackLogo.png" />

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

          <link rel="manifest" href="/manifest.json" />

        </Head>
        <body className='font-pt-sans'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}