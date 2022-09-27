import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/FightCultureBlackLogo.png" />
          <link rel="apple-touch-icon" href="/FightCultureBlackLogo.png" />
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