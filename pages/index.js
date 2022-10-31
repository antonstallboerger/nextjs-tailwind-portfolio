import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger</title>
        <meta name="description" content="Digital Product Designer and Developer" />
        <meta
        property="og:image"
        content="https://my-og-img.vercel.app/api/og?title=my post title"
        />
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
      </Head>

      <Navbar />
      <Main />
      
      </div>
  )
}

